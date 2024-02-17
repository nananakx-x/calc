const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  
app.use(cors()); 
  
// REST API to get all products details at once 
// With this api the frontend will only get the data 
// The frontend cannot modify or update the data  
// Because we are only using the GET method here. 

app.post('/api/add', (req, res) => {
  const { first, second } = req.body;
  const ans = parseInt(first) + parseInt(second);
  res.json({ ans });
});

app.post('/api/subtract', (req, res) => {
  const { first, second } = req.body;
  const ans = parseInt(first) - parseInt(second);
  res.json({ ans });
});
  
app.listen(5000, () => { 
    console.log('Server started on port 5000'); 
}); 