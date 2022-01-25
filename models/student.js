const mongoose = require("mongoose");

/*const mySchema = new mongoose.Schema({
  startDate: String,
  businessID: {
    type: Object,
    required: false,
  },
  checkList: Object,
  city: Object,
  createdAt: String,
  createdBy: String,
  droppedDate: String,
  gigOrderStatus: String,
  gigerClientId: {
    type: String,
    required: false,
  },
  gigerId: String,
  gigerName: String,
  isActive: String,
  jobProfile: Object,
  lastWorkingDate: {
    type: String,
    required: false,
  },
  reportingLocation: Object,
  secondaryMobileNumber: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
});
*/

const mySchema = new mongoose.Schema({
  name: String,
  roll_no: Number,
  city: String,
});

module.exports = mongoose.model("Student", mySchema);
