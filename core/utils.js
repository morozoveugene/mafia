const {errors} = require("./errors");
const User = require('./models/user');


exports.JsonErrorResponse = (code) => {
  return {error: {code: code, message: errors[code]}}
};

exports.JsonResponse = (status, message) => {
  return {status: status, message: message}
};

exports.login_required = async (req, res) => {
  let raw_token = '';
  let error = 0;
  try {
    raw_token = req.headers.authorization;
    const token = raw_token.split(' ')[1] || error++;
    await User.exists({token: token}) || error++;
  } catch (e) {
    error++;
  }
  return (error > 0) ? res.json(exports.JsonErrorResponse(403), status=403) : false;
};