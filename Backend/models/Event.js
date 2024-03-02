const mongoose = require("mongoose")

const EventSchema =  mongoose.Schema({
    title: { type: String },
    message: { type: String},
    discord : { type: String },
    registerLink : { type: String},
    selectedFile: {type:String}

});

// mongoose.models = mongoose.models || {};
// export default mongoose.models.Event || mongoose.model('Event', EventSchema);

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
