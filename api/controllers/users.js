const User = require('../models/User');

async function index(req, res) {
  try {
    const users = await User.all;
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function show(req, res) {
  try {
    const users = await User.findByUsername(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function create(req, res) {
  try {
    const users = await User.create(req.body);
    res.status(201).json(users);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { index, show, create };
