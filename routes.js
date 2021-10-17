const express = require("express")
const router = express.Router()
const formCopy = require("../models/formModels")

router.post('/form', (request, response) =>{
    const formUser = new formCopy({
        fullName:require.body.fullName,
        email:request.body.email,
        age:request.body.age,
        fathersname:require.body.fathersname
    })
    formUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router