
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
   
    corsOptions = { origin: true }

    callback(null, corsOptions)
}
module.exports = corsOptionsDelegate;