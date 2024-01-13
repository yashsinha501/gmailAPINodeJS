require("dotenv").config();

const auth = {
  type: "OAuth2",
  user: "13yashsinha@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "Yash <13yashsinha@gmail.com>",
  to: "13yashsinha@gmail.com",
  subject: "Gmail API NodeJS",
};

module.exports = {
  auth,
  mailoptions,
};