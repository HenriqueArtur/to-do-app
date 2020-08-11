module.exports =  function(req, res, next) {
    res.header('Access-Controll-Allow-Origin', '*')
    res.header('Access-Controll-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Controll-Allow-Origin', 'Origin, X-Requisted-With, Content-Type, Accept')
    next()
}