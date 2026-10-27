export const MAX_QUOTE_PHOTOS = 5;
export const MAX_QUOTE_PHOTO_BYTES = 3 * 1024 * 1024;
export const MAX_QUOTE_REQUEST_BYTES = 4_300_000;

export type QuotePhoto = {
  filename: string;
  content: string;
};

export type PreparedQuotePhoto = QuotePhoto & {
  id: string;
  bytes: number;
  preview?: string;
};
