const express = require('express');
const { Sequelize, Op } = require('sequelize');
const cors = require('cors');
const defineFilm = require('./film');
const defineCustomer = require('./customer');
const app = express();
app.use(cors());

const sequelize = new Sequelize('dvdrental', 'ismaeelshujaat', 'Password123!', {
  host: 'localhost',
  dialect: 'postgres'
});

const Film = defineFilm(sequelize);
const Customer = defineCustomer(sequelize);

sequelize.authenticate().then(() => {

  app.get('/films', async (req, res) => {
    const films = await Film.findAll();
    res.json(films);
  });
    
  app.get('/customers', async (req, res) => {
    const customers = await Customer.findAll();
    res.json(customers);
  });

  app.get('/films/search', async (req, res) => {
    const { title, rentalRate, rating, year } = req.query;
  
    try {
      const films = await Film.findAll({
        attributes: ['title', 'rental_rate', 'release_year', 'rating'],
        where: {
          ...(title ? { title: { [Op.iLike]: `%${title}%` } } : {}),
          ...(rentalRate ? { rental_rate: { [Op.lte]: parseFloat(rentalRate) } } : {}),
          ...(rating ? { rating: rating } : {}),
          ...(year ? { release_year: parseInt(year) } : {})
        }
      });
  
      res.json(films);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
    
  app.get('/customers/search', async (req, res) => {
    const { firstName, lastName, email } = req.query;
  
    try {
      const customers = await Customer.findAll({
        attributes: ['first_name', 'last_name', 'email'],
        where: {
          ...(firstName ? { first_name: { [Op.iLike]: `%${title}%` } } : {}),
          ...(lastName ? { last_name: { [Op.iLike]: `%${title}%` } } : {}),
          ...(email ? { email: email } : {})
        }
      });
  
      res.json(customers);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});