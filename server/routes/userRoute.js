import express from 'express';
import { isAuth, login, logout, register } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login',login)
userRouter.get('/is-auth',authUser,isAuth) //here add post method after the error and in video it it get method 06:40 minute
userRouter.get('/logout',authUser,logout)

export default userRouter;
