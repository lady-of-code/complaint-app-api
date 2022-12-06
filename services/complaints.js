var sql_connection = require('./../routes/db')

function GetList(req, res, next) {
    try {
        debugger;
        const meta = { page: 1 };
        let data = "This is a simple text"

        sql_connection.query('SELECT * from complaints LIMIT 10', (err, rows) => {
            if(err) {
                res.json({error:err}).status(500)
            }
            else{
                data=rows;
                // sql_connection.end();
                res.json({data,meta}).status(200);
            }
        });

        
    }

    catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }

}

function AddComplaint(postData = {}) {
    const meta = { postData };
    const data = "This is a simple text for Post"
}

module.exports = {
    GetList, AddComplaint
}
