const Tag = require("../models/tags");

exports.createTag = async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.json(tag);
    console.log(tag.name);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if (!tag) {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
