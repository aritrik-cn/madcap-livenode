var bcrypt = require('bcrypt');

exports.chkcredentials = function (formdata, callback) {
	var returnData = {};
	try {
		Admin_login.findOne({email : formdata.email, status: 'Active'}, function (err, data) {
			if (err) {
				return callback (err);
			} else {
				if (data) {
					bcrypt.compare(formdata.password, data.password, function(err, response) {
						if (response) {
							returnData = {
								"success": true,
	  							"message": "Records found",
							};
							return callback ("", returnData);
						} else {
							returnData = {
								"success": false,
								"message": "Password Didn't Match",
							};
							return callback ("", returnData);
						}
					});
				} else {
					returnData = {
						"success": false,
						"message": "No Valid Profile Found.",
					};
					return callback ("", returnData);
				}
			}
		});
	} catch (err) {
		console.log("Login db Err : " + err);
	}
};

/*

			bcrypt.hash(formdata.password, 10, function(err, hash) {
				console.log("Hash 1 : " + hash);
			});
*/