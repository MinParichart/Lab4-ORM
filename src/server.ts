import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/', (req : Request, res : Response) => { 
  res.send('Hello World')
})

app.get('/test', (req,res) => { // localhost:3000/test
  let returnObj = { 
    name : 'test', 
    age : 20, 
    address : 'Thai'
  }
  res.send(returnObj)
})

// app.get('/test', (req: Request, res: Response) => { // localhost:3000/test?id=5
//   const id = req.query.id;   
//   const output = `id: ${id}`;
//   res.send(output);
// })

app.listen(port, () => { 
  console.log((`App listening at http://localhost:${port}`))
})