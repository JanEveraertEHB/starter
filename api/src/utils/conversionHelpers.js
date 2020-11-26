



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

  checkUUID: (uuid) => {
    console.log(uuid)

    return true
  }
}

module.exports = ConversionHelper