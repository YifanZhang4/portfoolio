const PastP = require("../models/pastproj");

exports.pastpHome = async (req, res) => {
  try {
    const pastPs = await PastP.find({});
    res.json(pastPs);
  } catch (error) {
    console.log(error);
  }
};

exports.createPastP = async (req, res) => {
  try {
    const pastP = new PastP(req.body);
    await pastP.save();
    res.json(pastP);
    console.log(pastP.name);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updatePastP = async (req, res) => {
  try {
    const pastP = await PastP.findById(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (pastP[update] = req.body[update]));
    await pastP.save();
    res.json(pastP);
  } catch (error) {
    console.log(error);
  }
};

exports.deletePastP = async (req, res) => {
  try {
    const pastP = await PastP.findByIdAndDelete(req.params.id);
    if (!pastP) {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
