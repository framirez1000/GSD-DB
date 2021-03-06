const messages = {
    emptyUsername: 'Username is required',
    minUsername: 'Username length must be 12',
    maxUsername: 'Username length must be 12',
    invalidUsername: 'Username must include not include: gfdfdgdfg',
    emptyPassword: 'Password is required',
    minPassword: 'Password length must be greater than 3',
    maxPassword: 'Phone number length must be less than 20',
    invalidPassword: 'Password must include only characters from [0-9] [a-z] [A-Z] [!@#$%^&*?] &  3 < len < 20',
    emptyFirstName: 'First name is required',
    minFirstName: 'First name length must be greater than 3 characters',
    maxFirstName: 'First name length must be less than 30 characters',
    invalidFirstName: 'First name must contain only characters. Symbols and numbers not allowed',
    emptyLastName: 'Last name is required',
    minLastName: 'Last name length must be greater than 3 characters',
    maxLastName: 'Last name length must be less than 30 characters',
    invalidLastName: 'Last name must contain only characters. Symbols and numbers not allowed',
    emptyEmail: 'Email is required',
    minEmail: 'Email length must be greater than 3 characters',
    maxEmail: 'Email length must be less than 30 characters',
    invalidEmail: 'Email must contain only characters, numbers, "@" and len > 6, other simbols not allowed',
    emptyRoles: 'Roles is required',
    minRoles: 'Roles length must be greater than 3 characters',
    maxRoles: 'Roles length must be less than 30 characters',
    invalidRoles: 'Roles must contain only characters. Symbols and numbers not allowed',
    emptyDescription: 'Description is required',
    minDescription: 'Description length must be greater than 3 characters',
    maxDescription: 'Description length must be less than 30 characters',
    invalidDescription: 'Description must contain only characters. Symbols and numbers not allowed',
    emptyModule: 'Module is required',
    minModule: 'Module length must be greater than 3 characters',
    maxModule: 'Module length must be less than 30 characters',
    invalidModule: 'Module must contain only characters. Symbols and numbers not allowed',
    emptyLocation: 'Location is required',
    minLocation: 'Location length must be greater than 3 characters',
    maxLocation: 'Location length must be less than 30 characters',
    invalidLocation: 'Location must contain only characters. Symbols and numbers not allowed',
    emptySubsystem: 'Subsystem is required',
    minSubsystem: 'Subsystem length must be greater than 3 characters',
    maxSubsystem: 'Subsystem length must be less than 30 characters',
    invalidSubsystem: 'Subsystem must contain only characters. Symbols and numbers not allowed',
    emptyManufacturer: 'Manufacturer is required',
    minManufacturer: 'Manufacturer length must be greater than 3 characters',
    maxManufacturer: 'Manufacturer length must be less than 30 characters',
    invalidManufacturer: 'Manufacturer must contain only characters. Symbols and numbers not allowed',
    emptyCode: 'Code is required',
    minCode: 'Code length must be greater than 3 characters',
    maxCode: 'Code length must be less than 30 characters',
    invalidCode: 'Code must contain only characters. Symbols and numbers not allowed',
    emptyRef_code: 'Ref_code is required',
    minRef_code: 'Ref_code length must be greater than 3 characters',
    maxRef_code: 'Ref_code length must be less than 30 characters',
    invalidRef_code: 'Ref_code must contain only characters. Symbols and numbers not allowed',
  };
  
  module.exports =
        Object.freeze(messages);
  //export default messages;