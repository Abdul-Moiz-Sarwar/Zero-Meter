const vehicle = require('../models/vehicle');
const { PythonShell } = require('python-shell');

const fetchDataFromMongoDB = async () => {
    try {
      
      const data = await vehicle.find({}); // Fetch all documents from the collection
      return data;
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      
    }
  };
  

// Convert the data to a JSON string
const getrecs=async (req,res)=>{
const data = await fetchDataFromMongoDB();
const jsonData = JSON.stringify(data);
let pyshell = new PythonShell('rec-system.py');
pyshell.send(jsonData)

pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    res.send(message);
    console.log(message);
  });
}

module.exports.getrecs = getrecs
  