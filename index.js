import express from "express";
const app = express();
const port = 8080;
import randomFact from "./randomFact.js"

// app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/fact' , (req,res) => {
  
  const jsonData = {
   fact : randomFact()
  };
  res.send(jsonData);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});