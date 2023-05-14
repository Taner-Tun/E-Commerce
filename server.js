import { createServer } from 'vite';
import express from 'express';
import { createServer as _createServer } from 'http';
import { createPool } from 'mysql';
import dotenv from 'dotenv';

(async () => {
  try {
    const app = express();
    const server = _createServer(app);

    // Create Vite server in development mode
    const vite = await createServer({
      server: { middlewareMode: true },
    });

    // Attach Vite middleware to Express
    app.use(vite.middlewares);

    dotenv.config();

    // MySQL database configuration
    const dbConfig = {
      host: process.env.JENSEN_DELI_HOST,
      user: process.env.JENSEN_DELI_USER,
      password: process.env.JENSEN_DELI_PASSWORD,
      database: process.env.JENSEN_DELI_DATABASE,
    };

    // Create a MySQL connection pool
    const pool = createPool(dbConfig);

    // Serve the index.html from the Vite server
    app.get('*', async (req, res) => {
      try {
        const url = req.originalUrl;
        const template = await vite.transformIndexHtml(url, '<div id="root"></div>');
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end(e.message);
      }
    });

    // GET route to retrieve all data
    app.get('/api/data', (req, res) => {
      pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error connecting to MySQL database:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          connection.query('SELECT * FROM jensen_deli', (error, results) => {
            connection.release();
            if (error) {
              console.error('Error executing MySQL query:', error);
              res.status(500).json({ error: 'Internal server error' });
            } else {
              res.status(200).json(results);
            }
          });
        }
      });
    });

    // GET route to retrieve data by ID
    app.get('/api/data/:id', (req, res) => {
      const id = req.params.id;

      pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error connecting to MySQL database:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          connection.query('SELECT * FROM jensen_deli WHERE id = ?', [id], (error, results) => {
            connection.release();
            if (error) {
              console.error('Error executing MySQL query:', error);
              res.status(500).json({ error: 'Internal server error' });
            } else if (results.length === 0) {
              res.status(404).json({ error: 'Data not found' });
            } else {
              res.status(200).json(results[0]);
            }
          });
        }
      });
    });

 // POST route to add data
app.post('/api/data', (req, res) => {
  const { itemid, image, title, category, price } = req.body;
  const data = { itemid, image, title, category, price };

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      connection.query('INSERT INTO jensen_deli SET ?', data, (error, results) => {
        connection.release();
        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.status(201).json({ message: 'Data added successfully' });
        }
      });
    }
  });
});

// PUT route to update data by ID
app.put('/api/data/:id', (req, res) => {
  const id = req.params.id;
  const { itemid, image, title, category, price } = req.body;
  const data = { itemid, image, title, category, price };

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      connection.query('UPDATE jensen_deli SET ? WHERE id = ?', [data, id], (error, results) => {
        connection.release();
        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).json({ error: 'Internal server error' });
        } else if (results.affectedRows === 0) {
          res.status(404).json({ error: 'Data not found' });
        } else {
          res.status(200).json({ message: 'Data updated successfully' });
        }
      });
    }
  });
});

// DELETE route to delete data by ID
app.delete('/api/data/:id', (req, res) => {
  const id = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      connection.query('DELETE FROM jensen_deli WHERE id = ?', [id], (error, results) => {
        connection.release();
        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).json({ error: 'Internal server error' });
        } else if (results.affectedRows === 0) {
          res.status(404).json({ error: 'Data not found' });
        } else {
          res.status(200).json({ message: 'Data deleted successfully' });
        }
      });
    }
  });
});

    // Start the server
    server.listen(4000, () => {
      console.log('Server listening at http://localhost:4000');
    });
  } catch (err) {
    console.error('Error starting server:');
    console.error(err);
    process.exit(1);
  }
})();
