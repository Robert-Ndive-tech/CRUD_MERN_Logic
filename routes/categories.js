
const categrouter = express.Router();



categrouter.get('/sales', (req, res) => {
    let sql = 'SELECT * FROM categories';
    let query = Productiondb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   categrouter.post('/sales', (req, res) => {
    let sql = 'INSERT INTO categories SET ?';
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   categrouter.put('/sales/:id', (req, res) => {
    let sql = 'UPDATE categories SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   categrouter.delete('/sales/:id', (req, res) => {
    let sql = 'DELETE FROM categories WHERE id = ' + req.params.id;
    let query = Productiondb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
   module.exports = {categrouter}