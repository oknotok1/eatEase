import axios from "axios";

const googleSearchImage = (searchQuery: string) => {
  return axios
    .get("https://api.serphouse.com/serp/live", {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization:
          "Bearer X4t0HB0Y6B6jMaJ2XYEkte7aUYyM0NtI68uOXlXRJqZ3SzYSfoZ5erWlLkeb",
      },
      params: {
        q: searchQuery,
        domain: "google.com",
        location: "Singapore",
        lang: "en",
        device: "desktop",
        serp_type: "image",
        page: 1,
      },
    })
    .then((response) => {
      const results = response.data.results.results;
      console.log(
        "googleSearchImage::results[0]?.original",
        results[0]?.original
      );
      return results[0]?.original;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default googleSearchImage;
