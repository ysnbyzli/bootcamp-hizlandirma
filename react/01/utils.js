import axios from "axios";

const getUserInfo = async (id) => {
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const { data: response } = await axios.post(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return Object.assign(user, response);
};

export default getUserInfo;
