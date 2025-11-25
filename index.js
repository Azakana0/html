const express = require('express');
const app = express();
app.use(express.json())
app.post('/',(req, res) => {
    const user = req.body;
    console.log (user)
    res.status(200).json({message:user})
});
app.listen(8080);