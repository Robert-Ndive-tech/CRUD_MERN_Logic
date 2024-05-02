const express=  require ('express')
const staffrouter = express.Router();



staffrouter.get('/sales', (req, res) => {
    let sql = 'SELECT * FROM brands';
    let query = Productiondb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   staffrouter.post('/sales', (req, res) => {
    let sql = 'INSERT INTO brands SET ?';
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   staffrouter.put('/sales/:id', (req, res) => {
    let sql = 'UPDATE brands SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   staffrouter.delete('/sales/:id', (req, res) => {
    let sql = 'DELETE FROM brands WHERE id = ' + req.params.id;
    let query = Productiondb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
   
  