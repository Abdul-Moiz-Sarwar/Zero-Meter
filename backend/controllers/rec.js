const { PythonShell } = require('python-shell');
const vehicle = require('../models/vehicle');

const fetchDataFromMongoDB = async () => {
    try {
        console.log('Fetching data from MongoDB...');
        const data = await vehicle.find({});
        console.log('Data fetched from MongoDB:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        throw new Error('Database fetch error');
    }
};

const getrecs = async (req, res) => {
    try {
        const data = await fetchDataFromMongoDB();
        if (!data || data.length === 0) {
            console.error('No data found in MongoDB');
            return res.status(500).send('No data found in database');
        }
        const selectedKeys = ['type', 'company', 'model', 'year', 'varient', 'power', 'color', 'mileage', 'transmission']

        // Filter out unwanted keys from each object
        
        
                // Convert data to JSON string
               
        
                // Filter out unwanted keys from each object
                const filteredData = data.map(obj => {
                    const filteredObj = {};
                    selectedKeys.forEach(key => {
                        if (obj[key] !== undefined) {
                            filteredObj[key] = obj[key];
                        }
                    });
                    return filteredObj;
                });
        
        
        const jsonData = JSON.stringify(filteredData);
        console.log('Data converted to JSON:', jsonData);

        let pyshell = new PythonShell('./controllers/rec-system.py');
        console.log('PythonShell created for script rec-system.py');

        pyshell.send(jsonData);
        console.log("Data sent to Python script");

        pyshell.on('message', function (message) {
            console.log('Received message from Python script:', message);
            res.send(message);
        });

        pyshell.on('error', function (err) {
            console.error('PythonShell error:', err);
            res.status(500).send('Error executing recommendation script');
        });
    } catch (error) {
        console.error('Error in getrecs:', error);
        res.status(500).send('Internal server error');
    }
};

module.exports.getrecs = getrecs;
