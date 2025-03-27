const errorHandler = async (err, req, res, next) => {
    res.status(res.statusCode).json({error:err.message});
}

export default errorHandler;