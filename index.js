const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

let medicalBills = [];

app.get('/items', (req, res) => {
  res.json(medicalBills);
});

app.post('/items', (req, res) => {
    if(!Object.keys(req.body).length){
        res.json({message:"Please provide details to add"});
        return;
    } 
    
  const newBill = req.body;
  newBill["date"] = new Date(newBill["date"])
  medicalBills.push(newBill);
  res.json({message: 'Bill added successfully'});
});


app.use(express.json());

app.listen(3000, () => {
  console.log('Medical bill upload service is running on http://localhost:3000');
});


