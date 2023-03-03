const School = require('../models/Schools');

module.exports = {
  getSchool: async (req, res) => {
    try {
      const schoolsItems = await School.find();
      const itemsLeft = await School.countDocuments();
      res.render('schools.ejs', { Schools: schoolsItems, left: itemsLeft });
      // console.log(schoolsItems);
      // console.log(itemsLeft);
      res.send(schoolsItems);
    } catch (err) {
      console.log(err);
    }
  },
  createSchool: async (req, res) => {
    try {
      await School.create({ 
        studentName:req.body.studentName,
        studentStandard:req.body.studentStandard,
        section:req.body.section,
        schoolName:req.body.schoolName,
        Tamil: req.body.Tamil,
        English: req.body.English,
        Maths: req.body.Maths,
        Science: req.body.Science,
        SocialScience: req.body.SocialScience,
        Total: req.body.Total,
        Percentage: req.body.Percentage
    });
      console.log('School has been added!');
      res.redirect('/schools');
    } catch (err) {
      console.log(err);
    }
  },
  updateSchool: async(req,res)=>{
    try {
      await School.findOneAndUpdate(
        { _id: req.body.schoolId },
        {
          studentName:req.body.studentName,
          studentStandard:req.body.studentStandard,
          section:req.body.section,
          schoolName:req.body.schoolName,
          Tamil: req.body.Tamil,
          English: req.body.English,
          Maths: req.body.Maths,
          Science: req.body.Science,
          SocialScience: req.body.SocialScience,
          Total: req.body.Total,
          Percentage: req.body.Percentage
        }
      );
      console.log('School Updated');
      res.json('School Updated');
    } catch (err) {
      console.log(err);
    }
  },
  deleteSchool: async (req, res) => {
    console.log(req.body.schoolId);
    try {
      await School.findOneAndDelete({ _id: req.body.schoolId });
      console.log('Deleted School');
      res.json('Deleted It');
    } catch (err) {
      console.log(err);
    }
  },
};
