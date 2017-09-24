var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:mio@localhost:8485/PROARINSADB';
var db = pgp(connectionString);

// add query functions

function getAllCustomers(req, res, next) {
  db.any('select * from clientes')
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

function SaveCustomer(req,res,next){
  console.log(req.body);
  db.none('insert into clientes values(${nombre}, ${apellidos}, ${cedula}, ${telefono}, ${correo})',
  req.body)
  .then(() =>{
    res.status(200)
      .json({
        success: true
      });
  })
  .catch((err)=>{
    res.status(200)
    .json({
      success: false
    });
  })
}

module.exports = {
  getAllCustomers: getAllCustomers,
  SaveCustomer: SaveCustomer
}