const algo = require ('./../../algo')


const mainController = {


    homePage : (req, res) => {
        res.render('index')
        
    },


    cesarPage: (req, res)=>{
        res.render('cesar')
    },

    submit: async (req, res) => {
        try {
            console.log(req.body)

            const messageEncoded=  await algo.vigenereEncoding(req.body.messageToEncode, req.body.vigenereKey)
            req.session.messageEncoded = messageEncoded;
            console.log(messageEncoded)

            return res.redirect('/cesar')
            
        } catch (error) {
            console.log(error)
            console.log("We are here")
        res.status(500).send(error)
        }
    }
};

module.exports = mainController;