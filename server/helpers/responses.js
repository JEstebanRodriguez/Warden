export const successResponse = (res, data = '', code = 200) => {
    res.status(code).json({
        success: true,
        data
    })
}

export const badResponse = (res, message = '', code = 400) => {
    res.status(code).json({
        success: false,
        message
    })
}