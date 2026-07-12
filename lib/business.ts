export const businessDetails = {
  name: "F&S Painting",
  googleBusinessName: "F&S Painting Services",
  googleRating: "5.0",
  googleReviewCount: 35,
  email: "fnspaintinggroup@gmail.com",
  phones: ["0452 209 113", "0452 609 113"],
  websiteUrl: "https://www.fnspainting.com.au",
  googlePlaceId: "ChIJz13s4ae8EmsRiWvxolVAq-U",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=F%26S%20Painting%20Services&query_place_id=ChIJz13s4ae8EmsRiWvxolVAq-U",
  googleLeaveReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJz13s4ae8EmsRiWvxolVAq-U",
  googleDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=F%26S%20Painting%20Services%2C%202A%20Help%20St%2C%20Chatswood%20NSW%202067&destination_place_id=ChIJz13s4ae8EmsRiWvxolVAq-U",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=F%26S%20Painting%20Services%202A%20Help%20St%20Chatswood%20NSW%202067&output=embed",
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

export function formatAddress(
  address: (typeof businessDetails.addresses)[number],
) {
  return `${address.street}, ${address.suburb}, ${address.region} ${address.postcode}`;
}
