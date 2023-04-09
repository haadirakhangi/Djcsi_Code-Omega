const mongoose = require("mongoose")
mongoose.connect(
    "mongodb+srv://hatim:hatim@cluster0.f7or37n.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const adminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true }
})
const parent = new mongoose.model("parent", adminSchema)
module.exports = parent;