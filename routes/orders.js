
const ordersrouter = express.Router();



ordersrouter.get('/sales', (req, res) => {
    let sql = 'SELECT * FROM orders';
    let query = Productiondb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   ordersrouter.post('/sales', (req, res) => {
    let sql = 'INSERT INTO orders SET ?';
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   ordersrouter.put('/sales/:id', (req, res) => {
    let sql = 'UPDATE orders SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   ordersrouter.delete('/sales/:id', (req, res) => {
    let sql = 'DELETE FROM orders WHERE id = ' + req.params.id;
    let query = Productiondb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
   
