const connection = require ('../config/database')


const getHomepage = (req, res) =>{
    return res.render('home.ejs')
}
const getABC = (req, res) =>{
    res.send('check ABC')
}

const postCreateUser = (req, res) =>{
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    
    console.log("email =", email, "name =", name, "city=", city)

    
    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?);`,
        [email, name, city],
        function (err, results) {
          

          res.send('created successfully')
        }
      );
}
module.exports ={
    getHomepage,
    getABC,
    postCreateUser
}