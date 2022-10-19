const bcrypt = require('bcryptjs');

const encodeText = ( plainText ) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(plainText, salt);
}

const compareHash = ( plainText, hashText ) => {
    return bcrypt.compareSync(plainText, hashText);
}

module.exports = {
    encodeText,
    compareHash,
}