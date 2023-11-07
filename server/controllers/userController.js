
const User = require('../models/Users');

async function addUser(req, res){
    try{
        const {email, password, videoFavorito} = req.body;

        const user = User({
            email, 
            password, 
            videoFavorito

        });

        const users = await user.save(); //guarda la constante que acabamos decrear en la linea 8
        res.status(201).send({ users }) //ese users es la coleccion
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function getUsers(req, res) {
    try{
        const users = await User.find(); //hace referencia al modelo
        res.status(200).send({users});
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function findUser (req, res){
    try{
    const users = await User.findById(req.params.id)
    res.status(200).send({users})
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function updateUser(req, res){
    try{
        const users = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send({users})
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function deleteUser(req, res){
    try{
        const users = await User.findByIdAndDelete(req.params.id);
        if(!users){
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        res.status(200).send({message: 'Usuario eliminado exitosamente'});
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

module.exports = {addUser, getUsers, findUser, updateUser, deleteUser};
