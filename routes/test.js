  
   staffrouter.get('/display', (req, res) => {
    let sql = 'SELECT * FROM staffs';
    let query = Salesdb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   staffrouter.post('/insert', (req, res) => {
    let sql = 'INSERT INTO staffs SET ?';
    let post = req.body;
    let query = Salesdb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   staffrouter.put('/select/:id', (req, res) => {
    let sql = 'UPDATE staffs SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Salesdb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   staffrouter.delete('/delete/:id', (req, res) => {
    let sql = 'DELETE FROM staffs WHERE id = ' + req.params.id;
    let query = Salesdb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });


   customrouter.get('/display', (req, res) => {
    let sql = 'SELECT * FROM customers';
    let query = Salesdb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   customrouter.post('/insert', (req, res) => {
    let sql = 'INSERT INTO customers SET ?';
    let post = req.body;
    let query = Salesdb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   customrouter.put('/select/:id', (req, res) => {
    let sql = 'UPDATE customers SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Salesdb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   customrouter.delete('/delete/:id', (req, res) => {
    let sql = 'DELETE FROM customers WHERE id = ' + req.params.id;
    let query = Salesdb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });


  


   itemorderRouter.get('/display', (req, res) => {
       let sql = 'SELECT * FROM orders_items';
       let query = Salesdb.query(sql, (err, results) => {
          if (err) throw err;
          console.log(results);
          res.send(results);
       });
      });
      
      itemorderRouter.post('/insert', (req, res) => {
       let sql = 'INSERT INTO orders_items SET ?';
       let post = req.body;
       let query = Salesdb.query(sql, post, (err, result) => {
          if (err) throw err;
          res.send(result);
          console.log(result);
       });
      });
      
      itemorderRouter.put('/select/:id', (req, res) => {
       let sql = 'UPDATE orders_items SET ? WHERE id = ' + req.params.id;
       let post = req.body;
       let query = Salesdb.query(sql, post, (err, result) => {
          if (err) throw err;
          res.send('Sale Data Updated...');
       });
      });
      
      itemorderRouter.delete('/delete/:id', (req, res) => {
       let sql = 'DELETE FROM orders_items WHERE id = ' + req.params.id;
       let query = Salesdb.query(sql, (err, result) => {
          if (err) throw err;
          res.send('Sale Data Deleted...');
       });
      });
      




ordersrouter.get('/display', (req, res) => {
    let sql = 'SELECT * FROM orders';
    let query = Salesdb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
  
   ordersrouter.post('/insert', (req, res) => {
    let sql = 'INSERT INTO orders SET ?';
    let post = req.body;
    let query = Salesdb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   ordersrouter.put('/select/:id', (req, res) => {
    let sql = 'UPDATE orders SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Salesdb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   ordersrouter.delete('/delete/:id', (req, res) => {
    let sql = 'DELETE FROM orders WHERE id = ' + req.params.id;
    let query = Salesdb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });

   storesrouter.get('/display', (req, res) => {
    let sql = 'SELECT * FROM stores';
    let query = Salesdb.query(sql, (err, results) => {
       if (err) throw err;
       console.log(results);
       res.send(results);
    });
   });
   
   storesrouter.post('/insert', (req, res) => {
    let sql = 'INSERT INTO SET stores?';
    let post = req.body;
    let query = Salesdb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send(result);
       console.log(result);
    });
   });
   
   storesrouter.put('/select/:id', (req, res) => {
    let sql = 'UPDATE stores SET ? WHERE id = ' + req.params.id;
    let post = req.body;
    let query = Salesdb.query(sql, post, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Updated...');
    });
   });
   
   storesrouter.delete('/delete/:id', (req, res) => {
    let sql = 'DELETE FROM stores WHERE id = ' + req.params.id;
    let query = Salesdb.query(sql, (err, result) => {
       if (err) throw err;
       res.send('Sale Data Deleted...');
    });
   });
   


      


 
