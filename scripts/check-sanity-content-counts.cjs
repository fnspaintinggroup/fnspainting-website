const { getCliClient } = require("sanity/cli");

const client = getCliClient({ apiVersion: "2026-06-12" });

client
  .fetch(`{
    "blogPost": count(*[_type == "blogPost"]),
    "project": count(*[_type == "project"]),
    "galleryCollection": count(*[_type == "galleryCollection"]),
    "review": count(*[_type == "review"]),
    "service": count(*[_type == "service"])
  }`)
  .then((counts) => {
    console.log(JSON.stringify(counts, null, 2));
  })
  .catch((error) => {
    console.error(error.stack || error.message);
    process.exit(1);
  });
