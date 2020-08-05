export const returnInfo = (msg, res) => {

    const error = { errors: [{ message: msg }] }
    
    return res.status(400).json({ message: error })

}

