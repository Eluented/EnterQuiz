const { getDb, connectToDb } = require('./db')
const app = require('./app')

// db connection
let db

const port = process.env.PORT || 3001;

connectToDb((err) => {
    if(!err){
      app.listen(port, () => {
        console.log(`app listening on port ${port}`)
      })
      db = getDb()
    }
})