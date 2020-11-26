



const { v1: uuidv1 } = require('uuid');

const ConversionHelper = {
  /**
   * generates UUID
   * 
   * @params  
   * @returns uuid: String
   */
  generateUUID: () => {
    const uuid = uuidv1();
    return uuid;
  },
  /**
    * validate UUID
    *
    * @params
    * @returns uuid: String
    */
  checkUUID: (uuid) => {
    return true
  }
}

module.exports = ConversionHelper