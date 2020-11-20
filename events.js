const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  events: {
    type: Array
  },
  recurrence: {
    type: Array
  }
});

module.exports = mongoose.model("events", EventSchema);