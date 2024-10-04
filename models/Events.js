const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  tripTitle: { type: String, required: true },
  tripStart: { type: String, required: true },
  tripEnd: { type: String, required: true },
  public: { type: Boolean, default: false },
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  details: {
    transport: [Object],
    lodging: [Object],
    activity: [Object],
    groupmembers: [Object],
    packlist: [String],
    notes: [String]
  }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
