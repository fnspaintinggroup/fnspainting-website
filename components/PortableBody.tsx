import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

type PortableBodyProps = {
  value: PortableTextBlock[];
};

export function PortableBody({ value }: PortableBodyProps) {
  return (
    <div className="space-y-5 text-base leading-8 text-ink/72">
      <PortableText
        value={value}
        components={{
          block: {
            h2: ({ children }) => (
              <h2 className="pt-5 text-2xl font-semibold leading-tight text-ink">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="pt-4 text-xl font-semibold leading-tight text-ink">{children}</h3>
            ),
            normal: ({ children }) => <p>{children}</p>,
          },
          list: {
            bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
            number: ({ children }) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
          },
        }}
      />
    </div>
  );
}
