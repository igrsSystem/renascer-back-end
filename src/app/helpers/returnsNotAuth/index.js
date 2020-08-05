export const returnNotAuth = (msg , res ) => {
    const error = { errors: [{ message: msg }] }
    
    return res.status(401).json({ message: error })


}