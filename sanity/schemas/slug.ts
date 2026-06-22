const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function slugifyTitle(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

export function validateUrlSlug(value: { current?: string } | undefined) {
  if (!value?.current) {
    return true;
  }

  if (!slugPattern.test(value.current)) {
    return "Use a short URL slug with lowercase letters, numbers, and hyphens only. Example: bathroom-ceiling-restoration";
  }

  if (value.current.length > 96) {
    return "Keep the URL slug under 96 characters.";
  }

  return true;
}
