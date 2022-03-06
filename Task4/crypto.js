const crypto = require("crypto")
const util = require('util')

// password = "12345"
async function scryptHash(password){
    const saltUser = crypto.randomBytes(16).toString('hex')
    const hashBuffer = await util.promisify(crypto.scrypt)(password,saltUser,32)
    return `${hashBuffer.toString('hex')}:${saltUser}`
}

scryptHash(password).then(hash=>console.log(hash))

