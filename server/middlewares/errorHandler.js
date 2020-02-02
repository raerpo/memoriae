module.exports = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const { message, data, validation } = error;
    res.status(status).json({
        message,
        data,
        validation
    })
}