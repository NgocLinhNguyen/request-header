var express = require("express")
var app = express()

app.get('/api/whoami', function (req, res) {
    var header = req.headers
    var result = {
        "ipaddress": header["x-forwarded-for"],
        "language": header["accept-language"].split(",")[0],
        "software": header["user-agent"].split(")")[0].split("(")[1]
    }
    res.json(result)
})

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 8080!')
})