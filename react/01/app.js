import getUserInfo from "./utils.js";

getUserInfo(1)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error.message));
