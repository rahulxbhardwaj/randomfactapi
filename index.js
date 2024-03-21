const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/fact' , (req,res) => {

  const jsonData = {
   fact : "This is a Random Fact"
  };
  res.send(jsonData);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});