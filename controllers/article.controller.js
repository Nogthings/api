const test = (req, res) => {
    return res.status(200).json({
        message: 'Hello World!'
    });
}

const create = (req, res) => {
    try {
        console.log("article created");
        return res.status(200).json({
            message : "Article created"
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            Message: error,
        })
    }
}

module.exports = {
    test,
    create
}