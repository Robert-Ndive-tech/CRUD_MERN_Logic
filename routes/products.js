
const productrouter = express.Router();



productrouter.get('/sales', (req, res) => {
    let sql = 'SELECT * FROM product';
    let query = Productiondb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   productrouter.post('/sales', (req, res) => {
    let sql = 'INSERT INTO product SET ?';
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   productrouter.put('/sales/:id', (req, res) => {
    let sql = 'UPDATE product SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   productrouter.delete('/sales/:id', (req, res) => {
    let sql = 'DELETE FROM product WHERE id = ' + req.params.id;
    let query = Productiondb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
   module.exports={productrouter};