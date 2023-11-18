import User from "../models/userModel.js";


const get_all_users = (req, res) => {
    res.send({ msg: "all users" })
}

const create_user = async (req, res) => {
    const { age, name, email } = req.body;
    const newUser = await User.create({ age, name, email })
    res.send(newUser)
}


export {
    get_all_users,
    create_user
}