import mongoose from 'mongoose'

const UserSchema = mongoose.Schema

const userSchema = new UserSchema({
    name: {type: String, defaul: null},
    email: {type: String, default: null}
})

const UserModel = mongoose.model('user', userSchema)

export default UserModel
