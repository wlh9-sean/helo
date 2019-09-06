// const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get('db')
    
    await db.register_user([username, password]).then(user => {
        res.status(200).send(user)
    }).catch(error => console.log(error))

}

const login = async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get('db')

    await db.get_user([username, password]).then(user => {
        res.status(200).send(user)
    }).catch(error => console.log(error))
}

const logout = (req, res) => {
    res.session.destroy()
}

module.exports = {
    register,
    login,
    logout
}