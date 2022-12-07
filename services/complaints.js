var sql_connection = require('./../routes/db')

function GetList(req, res, next) {
    try {
        debugger;
        var meta = { page: 1 };
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

function AddComplaint(req, res, next) {
    try{
        
        if(req.body){
            var meta = { postData:req.body };
            var data = req.body;
            var sql= "INSERT INTO complaints (complaint_desc, name, email) VALUES ('"+data.complaint_desc+"', '"+data.name+"', '"+data.email+"')";
            sql_connection.query(sql, function (err, result) {
                if (err) throw err;
                res.json({message:"one row created",meta}).status(200);
              });           
        }
        else{
            throw "There is no data posted";
        }

    }
    catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }
}

module.exports = {
    GetList, AddComplaint
}
