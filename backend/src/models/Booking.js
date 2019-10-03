const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  data: String,
  approved: { type: Boolean, default: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spot"
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
