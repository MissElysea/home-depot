const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create(req, res, next) {
    try {
      const user = await User.create(req.body)
      const isGuest = req.body.isGuest
      // token will be a string
      const token = createJWT(user)
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user
      res.locals.data.token = token
      next()
    } catch (e) {
      console.log('you got a database problem')
      res.status(400).json(e)
    }
  },
  //update put request findbyIdUpdate
	async update(req, res, next) {
		try {
			const user = await User.findByIdAndUpdate(req.params.id, req.body, {
				new: true
			});
			res.locals.data.user = user;
			next();
		} catch (e) {
			res.status(400).json({ message: e.message });
		}
	},
  
  async login(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  }

}

const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token)
  }
}


/* -- Helper Functions -- */

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}
module.exports = {
  checkToken,
  dataController,
  apiController
}