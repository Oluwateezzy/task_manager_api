const { CustomAPIError } = require("../errors/customErrors");

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    res.status(500).json({ err: err });
};

module.exports = errorHandlerMiddleware;