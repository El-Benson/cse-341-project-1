const mongodb = require('../data/database');
const { create } = require('../models/contact');
const  ObjectId  = require('mongodb').objected;

const getAll = async (req, res) => {
    //swagger.tags=['Users']
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
}


const getSingle = async (req, res) => {
    //swagger.tags=['Users']
    const userid = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: userid });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
}



const createUser = async (req, res) => {
    //swagger.tags=['Users']
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
     } else {
            res.status(500).json(response.error || 'Could not update user');
    
    }
};

const updateUser = async (req, res) => {
    //swagger.tags=['Users']
    const userid = new ObjectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userid }, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
     } else {
            res.status(500).json(response.error || 'Could not update user');
    
    }
};

const deleteUser = async (req, res) => {
    //swagger.tags=['Users']
    const userid = new ObjectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDatabase().db().collection('users').remove({ _id: userid }, true);
    if (response.deletecount > 0) {
        res.status(204).send();
     } else {
            res.status(500).json(response.error || 'Could not update user');
    
    }
}; 

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};