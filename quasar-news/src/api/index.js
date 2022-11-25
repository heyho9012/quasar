import axios from "axios";

// HTTP Request & Response  default settings
const config = {
  baseUrl: "https://api.hnpwa.com/v0",
};

// API Function settings
async function fetchList(path) {
  try {
    return await axios.get(`${config.baseUrl}${path}/1.json`);
  } catch (error) {
    console.log(error);
  }
}
function fetchUserInfo(username) {
  try {
    return axios.get(`${config.baseUrl}/user/${username}.json`);
  } catch (error) {
    console.log(error);
  }
}
function fetchCommentItem(itemId) {
  return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

export { fetchList, fetchUserInfo, fetchCommentItem };
