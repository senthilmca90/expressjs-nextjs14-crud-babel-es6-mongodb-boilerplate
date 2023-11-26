import express from 'express'
import UserController from '../controllers/UserController'
const router = express.Router();
/* GET users listing. */
router.get('/all', UserController.getAll)
router.get('/user-details/:id', UserController.getUserDetails)
router.post('/create', UserController.CreateUser)
router.put('/update/:id', UserController.UpdateUser)
router.delete('/delete/:id', UserController.DeleteUser)

export default router;
