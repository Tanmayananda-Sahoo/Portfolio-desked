import {User} from '../models/user.models.js';

export const meetHandler = async(req,res) => {
    const { email, name, phone } = req.body;

    if(name.trim() == '' || email.trim() == '' || !phone) {
        return res.status(401).json({
            message: 'All fields are mandatory.'
        })
    }

    if(phone.length != 10) {
        return res.status(401).json({
            message: "Phone number should be of length 10"
        })
    }

    const createdUser = await User.create({
        name,
        email,
        phone
    })
    return res
    .status(201)
    .json({
        message: 'User saved successfully.',
        user: createdUser
    })
}