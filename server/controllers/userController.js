import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs"


// Register user : /api/user/register
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing Details" })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.json({ success: false, message: "User already registered" })
        }

        const hashedPassowrd = await bcrypt.hash(password, 10)

        const user = await User.create({ name, email, password: hashedPassowrd })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly: true, //Prevent javaScript to access cookie
            secure: process.env.NODE_ENV === 'production',//Use secure cookie in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000, // cookies expiration time 
        })
        return res.json({ success: true, user: { name: user.name, email: user.email } })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })

    }
}

// Login User : /api/user/login     
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.json({ success: false, message: "Email and password are required" })
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Invalid email or password" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return res.json({ success: false, message: "Invalid email or password" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        return res.json({ success: true, user: { name: user.name, email: user.email } })


    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// Check Auth : /api/user/is-Auth

export const isAuth = async (req,res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId).select("-password")
        
        return res.json({ success: true, user })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })

    }
}

//Log-out User : /api/user/logout

export const logout = async(req,res)=>{
    try {
        res.clearCookie("token",{
            httpOnly :true,
            secure :process.env.NODE_ENV === 'production',
            sameSite :process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })

        return res.json({success:true, message :"User Logged  Out"})
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}