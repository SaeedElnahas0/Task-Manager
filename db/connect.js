const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        //remove warming
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}
module.exports = connectDB

/*
mongoose
.connect(connectionString, {
    //remove warming
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(()=>{console.log('CONNECTED TO DB .....')})
.catch((err)=>{console.log(err)})
*/