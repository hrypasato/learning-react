const { encodeText } = require('../lib/crypto');
const User = require('../schemas/User');

const findUser = async ( args ) => {
    const user = await User.findOne({ ...args });
    return user;
}

const createNewUser = async ( args ) => {
    const { password } = args;
    const newUser = new User({ ...args });

    //Encriptar la cotraseña
    const newPassword = encodeText(password);
    newUser.password = newPassword;

    await newUser.save()
    return newUser;
}

module.exports = {
    findUser,
    createNewUser,
}