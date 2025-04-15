exports.getAllUsers=(req,res)=>{

    console.log("Accediendo a todos los usuarios")
}
exports.getUser=(req,res)=> {
    console.log(req.query.enabled)
    console.group('Accediendo a usuario con id:' + req.params.id)
}

exports.createUser=(req,res) =>{
    let data=req.body
    const{nombre,apellido,email,telefono}=data
    console.log(`nombre: ${nombre} \n apellido: ${apellido}  \n email: ${email} \n telefono: ${telefono}`)
    //res.send(nombre,apellido,email,telefono)
    res.send("user:" + req.params.id + "editado")
}
exports.updateUser=(req,res) =>{
    let data=req.body
    const{nombre,apellido,email,telefono}=data
    console.log(`nombre: ${nombre} \n apellido: ${apellido}  \n email: ${email} \n telefono: ${telefono}`)
    console.log(req.params.id)
    console.log(`nombre: ${nombre} \n apellido: ${apellido}  \n email: ${email} \n telefono: ${telefono}`)
    res.send(data)
}
exports.delteUser=(req,res) =>{
    let data=req.body
    console.log(req.params.id)
    res.send("user:" + req.params.id + "eliminado")
}
