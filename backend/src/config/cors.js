module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
    res.header("Accress-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accrept")

    next()
}