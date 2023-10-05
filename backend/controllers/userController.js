//@desc Register new user
//@route POST/api/users
//@access Private

const registerUser = (req,res) =>{
    res.json({message:' Register User'})
}

//@desc Anthenticate user
//@route POST/api/users/login
//@access Private

const loginUser = (req,res) =>{
    res.json({message:' Login User'})
}


//@desc Get user data
//@route GET/api/users/me
//@access Private

const getMe = (req,res) =>{
    res.json({message:' User data display'})
}



module.exports = {
    registerUser,
    loginUser,
    getMe

}