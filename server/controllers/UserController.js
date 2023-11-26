import UserModel from '../models/UserModel'

const getAll = (req, res) => {
    UserModel.find().then(rs=> res.send(rs)).catch(err => console.log(err))
}

const getUserDetails = (req, res) => {
    const id = req.params.id
    UserModel.findById(id).then(rs=> res.send(rs)).catch(err => console.log(err))
}

const CreateUser = async(req, res) => {

    console.log(`req.body `, (req.body))
    console.log(`req.body `, JSON.stringify(req.body))
    const model = UserModel.create(req.body)
    model.then(rs => {
        res.send({result: rs})
    }).catch(err => {
        console.log({err})
    })
    // res.send({message: 'updated successfully'})
}

const UpdateUser = async(req, res) => {
    const id = req.params.id;
    const obj = req.body
    UserModel.findByIdAndUpdate(id, obj, {new: true}).then(rs => res.send(rs)).catch(err => console.log(err))
}

const DeleteUser = async(req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete(id).then(rs => res.send(rs)).catch(err => console.log(err))
}

export default {
    getAll,
    CreateUser,
    UpdateUser,
    DeleteUser,
    getUserDetails
}