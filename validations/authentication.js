const Joi = require('joi');
const messages = require('../utils/messages');
var util = require('util');

/**
 * @description Returns error messages for a schema key
 * @param {string} type
 * @param {string} empty Empty message
 * @param {string} min Minimun length message
 * @param {string} max Maximum length message
 * @param {string} pattern Regex pattern message
 */
createErrorMessages = (type, empty, min, max, pattern) => ({
  [`${type}.empty`]: empty,
  [`${type}.format`]: pattern,
  [`${type}.min`]: min,
  [`${type}.max`]: max,
  [`${type}.pattern.base`]: pattern,
  'any.required': empty,
});

exports.login = (data) => {
    const schema = Joi.object({
        username: Joi.string().regex(/^([0-9a-zA-Z!@#$%^&*?]{1,12})$/).required().messages(createErrorMessages(
        //username: Joi.string().regex(/^[+]+([0-9]{11,12})$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyUsername}`,
        `${messages.invalidUsername}`,
        `${messages.invalidUsername}`,
        `${messages.invalidUsername}`,
      )),
        password: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{3,20}$/).required().messages(createErrorMessages(
        //password: Joi.string().regex(/^(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{6,20}$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyPassword}`,
        `${messages.minPassword}`,
        `${messages.maxPassword}`,
        `${messages.invalidPassword}`,
      )),
    });
    return schema.validate(data, {
      abortEarly: false,
      allowUnknown: true,
    });
  };

  exports.signup = (data) => {
    const schema = Joi.object({
        username: Joi.string().regex(/^([0-9a-zA-Z!@#$%^&*?]{1,12})$/).required().messages(createErrorMessages(
        //username: Joi.string().regex(/^[+]+([0-9]{11,12})$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyUsername}`,
        `${messages.invalidUsername}`,
        `${messages.invalidUsername}`,
        `${messages.invalidUsername}`,
      )),
        password: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{3,20}$/).required().messages(createErrorMessages(
        //password: Joi.string().regex(/^(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{6,20}$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyPassword}`,
        `${messages.minPassword}`,
        `${messages.maxPassword}`,
        `${messages.invalidPassword}`,
      )),
      email: Joi.string().regex(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyEmail}`,
        `${messages.minEmail}`,
        `${messages.maxEmail}`,
        `${messages.invalidEmail}`,
      )),
      firstName: Joi.string().regex(/^(?=.*[a-zA-Z@])[0-9a-zA-Z]{3,20}$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyFirstName}`,
        `${messages.minFirstName}`,
        `${messages.maxFirstName}`,
        `${messages.invalidFirstName}`,
      )),
      lastName: Joi.string().regex(/^(?=.*[a-zA-Z])[a-zA-Z]{3,20}$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyLastName}`,
        `${messages.minLastName}`,
        `${messages.maxLastName}`,
        `${messages.invalidLastName}`,
      )),
      roles: Joi.string().regex(/^(?=.*[a-z])[a-z]{4,20}$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyRoles}`,
        `${messages.minRoles}`,
        `${messages.maxRoles}`,
        `${messages.invalidRoles}`,
      )),
    });
    return schema.validate(data, {
      abortEarly: false,
      allowUnknown: true,
    });
  };

  exports.addupComponent = (data) => {
    const schema = Joi.object({
      description: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?\/]{1,100})$/).required().messages(createErrorMessages(
        //username: Joi.string().regex(/^[+]+([0-9]{11,12})$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyDescription}`,
        `${messages.invalidDescription}`,
        `${messages.invalidDescription}`,
        `${messages.invalidDescription}`,
      )),
      module: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?\/]{1,100})$/).required().messages(createErrorMessages(
        //password: Joi.string().regex(/^(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{6,20}$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyModule}`,
        `${messages.minModule}`,
        `${messages.maxModule}`,
        `${messages.invalidModule}`,
      )),
      location: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?\/]{1,100})$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyLocation}`,
        `${messages.minLocation}`,
        `${messages.maxLocation}`,
        `${messages.invalidLocation}`,
      )),
      subsystem: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?\/]{1,100})$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptySubsystem}`,
        `${messages.minSubsystem}`,
        `${messages.maxSubsystem}`,
        `${messages.invalidSubsystem}`,
      )),
      manufacturer: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?\/]{1,100})$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyManufacturer}`,
        `${messages.minManufacturer}`,
        `${messages.maxManufacturer}`,
        `${messages.invalidManufacturer}`,
      )),
      code: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?\/]{1,100})$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyCode}`,
        `${messages.minCode}`,
        `${messages.maxCode}`,
        `${messages.invalidCode}`,
      )),
      ref_code: Joi.string().regex(/^(?=.*[0-9a-zA-Z!@#$%^&*?\/]{1,100})$/).required().messages(createErrorMessages(
        'string',
        `${messages.emptyRef_code}`,
        `${messages.minRef_code}`,
        `${messages.maxRef_code}`,
        `${messages.invalidRef_code}`,
      )),
    });
    return schema.validate(data, {
      abortEarly: false,
      allowUnknown: true,
    });
  };
  
  /*export default {
    createErrorMessages,
    login,
  };*/