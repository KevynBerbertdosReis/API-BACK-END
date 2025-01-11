import express from 'express'
import cors from "cors"
import User from './models/user-model.js'
import sequelizeConnection from './database/database.js'

const app = express()
const port = 3000

app.use(cors())

app.post('/', async (req, res) => {
  await User.create({name:'test', age:33, lastName:'de elite', email:'testeelite@kevyn.org.br' })
  return res.send('User created')
})

app.get('/comments', (req, res) => {
    const comments = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        return data
    }
    comments().then(data => res.json(data))
})

const initServer = async () => {
  try {
    await sequelizeConnection.sync({force: false})
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
    console.log('Database synced')
  } catch (error) {
    console.error('Unable to sync the database:', error)
  }
}

initServer()