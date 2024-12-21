// import bycrpt to criptograph password before saving on database
const bycrpt = require('bcrypt')

// function to hash a password
const encryptPassword = async (password) => {
    try {
        // define the number of salt rouds
        const saltRounds = 10;

        // hash the password
        const hashedPassword = await bycrpt.hash(password, saltRounds);
        console.log('Original password:', password)
        console.log('Encrypted password:', hashedPassword)

        return hashedPassword;
    } catch (err) {
        console.log("Error encrypting password:", err)
    }
}

encryptPassword('Luamel2024@')
// $2b$10$heF3LMj9gKo5wQxpT.klWeJqsxAtGabw9O2JWzpsMVFYZRTaFwAiq