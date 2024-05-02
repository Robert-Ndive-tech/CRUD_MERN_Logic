const express=  require ('express')
const stocksrouter = express.Router();




stocksrouter.get('/stocks', (req, res) => {
    let sql = 'SELECT * FROM stocks';
    let query = Productiondb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   stocksrouter.post('/stocks', (req, res) => {
    let sql = 'INSERT INTO stocks SET ?';
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   stocksrouter.put('/stocks/:id', (req, res) => {
    let sql = 'UPDATE stocks SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Productiondb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   stocksrouter.delete('/stocks/:id', (req, res) => {
    let sql = 'DELETE FROM stocks WHERE id = ' + req.params.id;
    let query = Productiondb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
