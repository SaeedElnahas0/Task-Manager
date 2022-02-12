//handle not-found error "when write wrong path"
const notFound = (req,res) => res.status(404).send('Route does not exist')
module.exports = notFound