
const storesrouter = express.Router();



storesrouter.get('/storage', (req, res) => {
    let sql = 'SELECT * FROM brands';
    let query = Productiondb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   storesrouter.post('/storage', (req, res) => {
    let sql = 'INSERT INTO brands SET ?';
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   storesrouter.put('/storage/:id', (req, res) => {
    let sql = 'UPDATE brands SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   storesrouter.delete('/storage/:id', (req, res) => {
    let sql = 'DELETE FROM brands WHERE id = ' + req.params.id;
    let query = Productiondb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
   
   module.exports = {storesrouter}