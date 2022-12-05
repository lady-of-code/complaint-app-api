function GetList(req, res, next) {
    try {
        debugger;
        const meta = { page:1 };
        const data = "This is a simple text"
        res.json({
            data,
            meta
        }).status(200);
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