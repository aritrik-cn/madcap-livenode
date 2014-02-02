/**
* LoginController
*
* @module      :: Controller
* @description :: A set of functions called `actions`.
*
*                 Actions contain code telling Sails how to respond to a certain type of request.
*                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
*
*                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
*                 and/or override them with custom routes (`config/routes.js`)
*
*                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
*
* @docs        :: http://sailsjs.org/#!documentation/controllers
*/

module.exports = {
    
    index: function (req, res) {
        try {
            res.view();
        } catch (err) {
            console.log("Login render Err : " + err);
        }
    },
    login: function (req, res) {
        login.chkcredentials (req.body, function (err, data) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.json(data);
            }
        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to LoginController)
    **/
  _config: {}

  
};
