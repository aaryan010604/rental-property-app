const Property = require('../models/Property');

exports.getProperties = async (req, res) => {
  const properties = await Property.find().populate('owner', 'name email');
  res.json(properties);
};

exports.addProperty = async (req, res) => {
  const { title, description, address, price } = req.body;
  const newProperty = new Property({
    title,
    description,
    address,
    price,
    owner: req.user._id
  });
  await newProperty.save();
  res.status(201).json(newProperty);
};
