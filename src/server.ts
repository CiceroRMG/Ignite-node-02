import { app } from './app.js'
import { env } from './env/index.js'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server Started on Port: 3131')
  })
