export const ErrorHandler = (err, req, res, next) => {
    const errorStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}