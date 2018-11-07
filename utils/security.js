/**
* This file shall contain all security related utils functions
*/
const bcrypt = require('bcrypt');
var BCRYPT_SALT_ROUNDS = 12;

/**
 *
 *
 * @param {*} str
 * @returns {*} hash
 */
exports.getHashedValue = async (str) => {
    let hash = await bcrypt.hash(str, BCRYPT_SALT_ROUNDS);
    if(hash){
        return hash;
    };
}
/**
 *
 *
 * @param {*} str
 * @param {*} hash
 * @returns {Boolean} res
 */
exports.checkHash = async (str, hash) => {
    let res = bcrypt.compare(str, hash);
    return res;
}
