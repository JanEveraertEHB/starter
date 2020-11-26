



const { v1: uuidv1 } = require('uuid');

const ConversionHelper = {
  /**
   * generates UUID
   * 
   * @params uuid: String 
   * @returns uuid: String
   */
  generateUUID: () => {
    const uuid = uuidv1();
    return uuid;
  }
}

module.exports = ConversionHelper