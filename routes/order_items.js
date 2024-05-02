
const itemorderRouter = express.Router();


itemorderRouter.get('/sales', (req, res) => {
    let sql = 'SELECT * FROM orders_items';
    let query = Productiondb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   itemorderRouter.post('/sales', (req, res) => {
    let sql = 'INSERT INTO orders_items SET ?';
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   itemorderRouter.put('/sales/:id', (req, res) => {
    let sql = 'UPDATE orders_items SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   itemorderRouter.delete('/sales/:id', (req, res) => {
    let sql = 'DELETE FROM orders_items WHERE id = ' + req.params.id;
    let query = Productiondb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
   
   module.exports = {itemorderRouter}