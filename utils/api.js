const axios = require("axios")
async function api(username) {
  const result = (await axios.get(`https://api.github.com/users/${username}`)).data;
  const apiData = {
    profilePic : result.avatar_url,
    bio : result.bio,
    email: result.email
  }
  return apiData;
}
module.exports = api;
