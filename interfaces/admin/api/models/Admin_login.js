/**
 * Admin_login
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	autoPK: false,
	autoCreatedAt: false,
  	autoUpdatedAt: false,
	attributes: {
		user_id: {
            type: 'integer',
            primaryKey: true
        },
        status: {
            type: 'enum',
            in: ['Active', 'Inactive']
        },
        email: {
            type: 'email',
            required: true
        },
        password: {
        	type: 'string',
            required: true
        }  
    }
};
