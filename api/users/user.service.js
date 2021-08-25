const pool = require('../../config/database');


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(fullName,password,emailId ) 
            values(?,?,?)`,
            [
                data.fullName,
                data.password,
                data.emailId
            ],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result);
            }
        )
    },
    getUsers: callBack => {
        pool.query(
            `select id,fullName,emailId from users where id=16`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select id,fullName,emailId from users where id=?`,
            [
                id
            ],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result[0]);
            }
        )
    },
    updateUsers: (data, callBack) => {
        pool.query(
            `update users set fullName=?,emailId=? where id=12`,
            [
                data.fullName,
                data.emailId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    }
}