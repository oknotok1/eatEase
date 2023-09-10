import axios from "axios";

const getRecipeInformation = () => {
  return axios
    .get("https://api.spoonacular.com/recipes/716429/information", {
      params: {
        apiKey: "c2fac6ab9ee34f06a3c19558516ee1f4",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getRecipeInformation;
