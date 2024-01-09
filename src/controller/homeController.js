const connection = require ('../config/database')


const getHomepage = (req, res) =>{

    
    connection.query(
        'select * from Users u',
        function(err, results, fields){
            users = results;
            console.log(results);
            res.send(JSON.stringify(users))
        }
    );
}
const getABC = (req, res) =>{
    res.send('check ABC')
}

module.exports ={
    getHomepage,
    getABC
}