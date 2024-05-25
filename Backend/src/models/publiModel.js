const connection = require('./connections')

const getAll = async () =>{
    const tasks = await connection.execute('SELECT * FROM TASK')
    return tasks;
};

module.exports ={
    getAll
};