const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true } // allows for time stamp for creation and update
);

module.exports = mongoose.model("Booking", bookingSchema);
