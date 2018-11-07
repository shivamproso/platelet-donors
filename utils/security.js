/**
* This file shall contain all security related utils functions
*/
const bcrypt = require('bcrypt');
var BCRYPT_SALT_ROUNDS = 12;

/**
 * Return hash for given string
 * @function getHashedValue
 * @param {String} str 
 * @returns {*} hash Returns hashed value of str
 */
exports.getHashedValue = async (str) => {
    let hash = await bcrypt.hash(str, BCRYPT_SALT_ROUNDS);
    if(hash){
        return hash;
    };
}
/**
 * Returns true if hashed value of str equals hash, else returns false
 * @function checkHash
 * @param {*} str
 * @param {*} hash
 * @returns {Boolean} res
 */
exports.checkHash = async (str, hash) => {
    let res = bcrypt.compare(str, hash);
    return res;
}
