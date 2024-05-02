
const customrouter = express.Router();


customrouter.get('/sales', (req, res) => {
    let sql = 'SELECT * FROM customers';
    let query = Productiondb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   customrouter.post('/sales', (req, res) => {
    let sql = 'INSERT INTO customers SET ?';
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   customrouter.put('/sales/:id', (req, res) => {
    let sql = 'UPDATE customers SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   customrouter.delete('/sales/:id', (req, res) => {
    let sql = 'DELETE FROM customers WHERE id = ' + req.params.id;
    let query = Productiondb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
