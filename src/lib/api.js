import axios from "axios";

export async function get(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function post(url, data) {
  try {
    const post = await axios.post(url, data);
    return post;
  } catch (e) {
    console.error(e);
  }
}

export default { get, post };
