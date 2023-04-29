const url = "https://api.thecatapi.com/v1/images/search";
const options = {
  method: "GET",
  headers: {
    "x-api-key":
      "live_obxQ6ag0PDUBG4HjFE27uZQz9yf9sV52OiUQbxGtmRd2xSW2LJc8UavfkSJRDXR7",
  },
};

const fetchCatImage = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const imageUrl = data[0].url;
    return imageUrl;
  } catch (error) {
    console.log(error);
  }
};

export default fetchCatImage;
