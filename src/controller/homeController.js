const getHomepage = (req, res) =>{
    res.render('sample.ejs')
}
const getABC = (req, res) =>{
    res.send('check ABC')
}

module.exports ={
    getHomepage,
    getABC
}