const { create, getUserByUserId, getUsers, updateUsers } = require("./user.service");
const { genSaltSync, hashSync, getSalt } = require('bcryptjs')
module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            })
        })
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, result) => {
            if (err) {
                console.log((err));
                return;
            }
            if (!result) {
                return res.json({
                    success: 0,
                    message: "Record Not Found!!!"
                })
            }
            return res.status(200).json({
                success: 1,
                data: result
            })
        })



    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    updateUsers: (req,res) =>{
        const body = req.body;
        updateUsers(body, (err, results) =>{
            if (err){
                console.log(err);
                
            }
            return res.json({
                success: 1,
                message: "updated Successfully"
            })
        })
    }
}