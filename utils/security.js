/**
 * This file shall contain all security related utils functions
 */
const bcrypt = require("bcrypt");
var BCRYPT_SALT_ROUNDS = 12; //salt round The higher the cost factor, the more hashing rounds are done. for production code salt round should be atleast 12

/**
 * Return hash for given string
 * @function getHashedValue
 * @param {String} str
 * @returns {*} Returns hashed value of str
 */
exports.getHashedValue = async str => {
  if (str != undefined) {
    try {
      let hash = await bcrypt.hash(str.toString(), BCRYPT_SALT_ROUNDS);
      return hash;
    } catch (err) {
      return err;
    }
  } else {
    throw new Error("data undefined!");
  }
};
/**
 * Returns true if hashed value of str equals hash, else returns false
 * @function checkHash
 * @param {*} str
 * @param {*} hash
 * @returns {Boolean} res
 */
exports.checkHash = async (str, hash) => {
  if (str != undefined || hash != undefined) {
    let res = await bcrypt.compare(str.toString(), hash.toString());
    return res;
  } else {
    throw new Error("data undefined!");
  }
};
