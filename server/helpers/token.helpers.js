import jwt from 'jsonwebtoken'

export const tokenGenerator = payload => {
    return jwt.sign({ payload }, process.env.TOKEN_SECRET, { expiresIn: '1d' })
}

export const tokenVerify = token => {
    return jwt.verify(token, process.env.TOKEN_SECRET)
}