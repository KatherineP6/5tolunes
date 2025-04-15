//conexion con el requerimiento expres del controlador
const express=require('express')

const router=express.Router()
//redirecciona
const userController=require('../controllers/userController')

router.get('/',userController.getAllUsers)
router.get('/:id',userController.getUser)
router.post('/',userController.createUser)
router.put('/:id',userController.updateUser)
router.delete('/:id',userController.delteUser)


module.exports=router