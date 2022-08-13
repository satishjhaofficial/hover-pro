import axios from "axios";

export const getCategoryPages = (slug) => {
  return axios
    .get(
      `https://printyouk.bendigofc.com.au/public/index.php/api/front/single/category/${slug}`
    )
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};
