const allowlist = ['http://localhost:3000/'];

const corsOptionsDelegate = (req, callback) => {
    let corsOptions;

    let isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;
    let isExtensionAllowed = req.path.endsWith('.jpg');

    if (isDomainAllowed && isExtensionAllowed) {
        console.log("this is working ");
        // Enable CORS for this request
        corsOptions = { origin: true }
    } else {
        // Disable CORS for this request
        console.log("this is not working ");

        corsOptions = { origin: true }
    }
    callback(null, corsOptions)
}
module.exports = corsOptionsDelegate;