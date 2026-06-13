export const businessDetails = {
  name: "F&S Painting",
  googleBusinessName: "F&S Painting Services",
  googleRating: "5.0",
  googleReviewCount: 35,
  email: "fnspaintinggroup@gmail.com",
  phones: ["0452 209 113", "0452 609 113"],
  websiteUrl: "https://www.fnspainting.com.au",
  googleReviewsUrl:
    "https://www.google.com/search?sca_esv=9063533dd0cd7df7&sxsrf=ANbL-n6t7NSLclPM2Q2A4ovPrFeuNJbxaA:1781306544845&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORzw1-Q5DufMT2VZbZcahpc9P-sTymHqcxieHdFoDuaSRTxoVCD1t4LxV3eLTOTS9Nayimdz_C6ay-A5JuhhZ8SRzh8AkXIF2_81jVp6P6UDhTwEIA%3D%3D&q=F%26S+Painting+Services+Reviews&sa=X&ved=2ahUKEwi-pd3-64KVAxXSSmwGHde5LSsQ0bkNegQIOhAH&cshid=1781306592736362&biw=1280&bih=598&dpr=1.5",
  googleDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=F%26S%20Painting%20Services%202A%20Help%20St%20Chatswood%20NSW%202067",
  addresses: [
    {
      label: "Lidcombe",
      street: "12 Urigh Rd",
      suburb: "Lidcombe",
      region: "NSW",
      postcode: "2141",
    },
    {
      label: "Chatswood",
      street: "2A Help St",
      suburb: "Chatswood",
      region: "NSW",
      postcode: "2067",
    },
  ],
};

export const quoteEmailHref = `mailto:${businessDetails.email}?subject=${encodeURIComponent(
  "Free painting quote request",
)}&body=${encodeURIComponent(
  "Hi F&S Painting,\n\nI would like a free painting quote.\n\nName:\nPhone:\nSuburb:\nService needed:\nProject details:\nPreferred timing:\n",
)}`;

export function formatAddress(address: (typeof businessDetails.addresses)[number]) {
  return `${address.street}, ${address.suburb}, ${address.region} ${address.postcode}`;
}
