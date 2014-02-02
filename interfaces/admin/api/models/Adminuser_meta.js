/**
 * Adminuser_meta
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true
        },
        status: {
            type: 'enum',
            in: ['Active', 'Inactive']
        },
        first_name: 'string',
        last_name: 'string',
        email: {
            type: 'email',
            required: true
        },
        addrss: 'text',
        gender: 'string',
        dob: 'date',
        image_link: 'string',
        created_at: {
            type: 'datetime',
            required: true
        },
        updated_at: {
            type: 'datetime',
            required: true
        },
        createdby_id: {
            type: 'integer',
            required: true
        },
    }
};
