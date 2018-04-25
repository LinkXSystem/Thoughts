const error = (code, name, message) => {
  let error = new Error();
  error.code = code;
  error.name = name;
  error.message = message;
  return error;
};

module.exports = {
  error
};
