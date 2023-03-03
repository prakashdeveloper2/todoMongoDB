const mongoose = require("mongoose");

const SchoolsSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  // address: {
  //   type: String,
  //   required: true,
  // },
  // city: {
  //   type: String,
  //   required: true,
  // },
  // zipcode: {
  //   type: String,
  //   required: true,
  // },
  // mobileNumber: {
  //   type: String,
  //   required: true,
  // },
  // noOfStudents: {
  //   type: String,
  //   required: true,
  // },
  // noOfTeachers: {
  //   type: String,
  //   required: true,
  // },
  // noOfClassRooms: {
  //   type: String,
  //   required: true,
  // },
  // noOfGrades: {
  //   type: String,
  //   required: true,
  // },
  // noOfStaffs: {
  //   type: String,
  //   required: true,
  // },
  // yearOfEstablishment: {
  //   type: String,
  //   required: true,
  // },
  studentName: {
    type: String,
    required: true,
  },//"Vimal",
  studentStandard: {
    type: String,
    required: true,
  },//"7th",
  section: {
    type: String,
    required: true,
  },//"A",
  schoolName: {
    type: String,
    required: true,
  },//"Nehru Public School",
  Tamil: {
    type: Number,
    required: true,
  },//78,
  English: {
    type: Number,
    required: true,
  },//78,
  Maths: {
    type: Number,
    required: true,
  },//78,
  Science: {
    type: Number,
    required: true,
  },//78,
  SocialScience: {
    type: Number,
    required: true,
  },//78,
  Total: {
    type: Number,
    required: true,
  },//384,
  Percentage: {
    type: String,
    required: true,
  },//
});

module.exports = mongoose.model("School", SchoolsSchema);
