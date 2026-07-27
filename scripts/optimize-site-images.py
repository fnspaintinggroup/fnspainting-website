#!/usr/bin/env python3
"""Reduce oversized website JPEGs without changing their filenames.

The default mode only reports candidates. Pass --apply to write optimized files.
Original versions remain recoverable from Git history.
"""

from __future__ import annotations

import argparse
import io
from pathlib import Path

from PIL import Image, ImageOps


def optimize_jpeg(path: Path, max_dimension: int, quality: int, apply: bool) -> tuple[int, int]:
    original_size = path.stat().st_size

    with Image.open(path) as source:
        image = ImageOps.exif_transpose(source)
        if image.mode not in ("RGB", "L"):
            image = image.convert("RGB")

        width, height = image.size
        scale = min(1.0, max_dimension / max(width, height))
        if scale < 1.0:
            image = image.resize(
                (max(1, round(width * scale)), max(1, round(height * scale))),
                Image.Resampling.LANCZOS,
            )

        output = io.BytesIO()
        image.save(
            output,
            format="JPEG",
            quality=quality,
            optimize=True,
            progressive=True,
        )

    optimized = output.getvalue()
    if len(optimized) >= original_size:
        return original_size, original_size

    if apply:
        path.write_bytes(optimized)

    return original_size, len(optimized)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path("public"))
    parser.add_argument("--threshold-mb", type=float, default=1.0)
    parser.add_argument("--max-dimension", type=int, default=2400)
    parser.add_argument("--quality", type=int, default=86)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    threshold = int(args.threshold_mb * 1024 * 1024)
    candidates = sorted(
        path
        for path in args.root.rglob("*")
        if path.is_file()
        and path.suffix.lower() in {".jpg", ".jpeg"}
        and path.stat().st_size > threshold
    )

    original_total = 0
    optimized_total = 0
    changed = 0

    for path in candidates:
        before, after = optimize_jpeg(path, args.max_dimension, args.quality, args.apply)
        original_total += before
        optimized_total += after
        if after < before:
            changed += 1

    saved = original_total - optimized_total
    mode = "APPLIED" if args.apply else "DRY RUN"
    print(f"Mode: {mode}")
    print(f"Candidates: {len(candidates)}")
    print(f"Reducible files: {changed}")
    print(f"Before: {original_total / 1024 / 1024:.1f} MB")
    print(f"After: {optimized_total / 1024 / 1024:.1f} MB")
    print(f"Saved: {saved / 1024 / 1024:.1f} MB")


if __name__ == "__main__":
    main()
