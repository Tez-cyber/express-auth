
class App {
    getAuthPage = (req, res, next) => {
        try{
            res.render('index')
        }catch(err){
            res.send('Error found')
        }
    }
}

module.exports = new App