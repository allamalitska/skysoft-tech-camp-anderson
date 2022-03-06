const crypto = require("crypto")
const util = require('util')

//Getting data from the form
document.getElementById("submitButton").addEventListener("click", singUpSaveHashPassword, {once:true})

//Getting hashed password and saving
async function singUpSaveHashPassword(event){
    event.preventDefault();
    const password = document.getElementById('password');
    // console.log(password.value)
    const hashedPassword = await scryptHash(password.value)
    localStorage.setItem('hashedPassword', hashedPassword)
}

// Hashing data(password)
async function scryptHash(password){
    const saltUser = crypto.randomBytes(16).toString('hex')
    const hashBuffer = util.promisify(crypto.scrypt)(password,saltUser,32)
    return `${hashBuffer.toString('hex')}:${saltUser}`
}

