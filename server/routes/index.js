import express from 'express'
import UserRoute from './UserRoute'

const router = express.Router();
const route = express()
/* GET home page. */

route.use('/users', UserRoute)

export default route;
