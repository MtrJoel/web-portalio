
// * create data for Users
const dataUsers = [{
    id: '1',
    name:'Joel Montero'
}];

const getAllUsers = (req, res)=> {
    res.json({
        status: 'Success',
        data: {
            userss: dataUsers,
        }
    })
}

const saveUsers = (req, res) =>{
    res.json();
}

module.exports = {
    getAllUsers,
    saveUsers
}