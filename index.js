import express from "express";
const app = express();
const port = 8080;
import randomFact from "./randomFact.js"

// app.use(express.json());



// app.get('/', (req, res) => {
//   const jsonData = {
//    fact : randomFact()
//   };
//   res.send(jsonData);
// });

try {
    app.use((req, res, next) => {
        const jsonData = {
            fact: randomFact()
        };
        res.send(jsonData);
    });
} catch (err) {
    res.send("Something Went Wrong")
}
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});