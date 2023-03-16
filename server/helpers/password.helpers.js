import bcrypt from 'bcryptjs'

export const passwordEncrypt = (password) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

export const passwordCompare = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}