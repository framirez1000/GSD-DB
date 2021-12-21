var statusCodes = require('../utils/statusCodes');


const successResponse = (res, statusCode, message, token, data) => 
 res.render('/singin');
/*res.status(statusCode).json({
    message,
    token,
    data,
  });*/
  
const errorResponse = (res, renderPage, statusCode, error) => res.render(renderPage.page, {title: renderPage.title, visibility: '', error: error});
//res.status(statusCode).json({ error });
  
exports.returnErrorMessages = (errors, renderPage, res, next) => {
    if (errors) {
      const { details } = errors;
      const errorMessages = details.map(error => error.message.replace(/['"]/g, '')).join(', ');
      return errorResponse(res, renderPage, statusCodes.badRequest, errorMessages);
    }
    return next();
};

const isPasswordValid = async (password, dbPassword) => {
    const isValid = await bcrypt.compare(password, dbPassword);
    return isValid;
};

/*export default {
    returnErrorMessages,
    successResponse,
    errorResponse,
    isPasswordValid,
};*/