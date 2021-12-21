const statusCodes = {
    success: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,
    conflict: 409,
    forbidden: 403,
    serverError: 500,
  };
  
  module.exports =
  Object.freeze(statusCodes);
  //export default statusCodes;