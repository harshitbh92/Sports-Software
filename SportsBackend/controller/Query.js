const express = require("express");
const User = require("../models/UserModel");
const Query = require("../models/QueriesModel");

const asyncHandler = require("express-async-handler");

const createQuery = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const newQuery = await Query.create(req.body);
  res.json(newQuery);
});

module.exports = {
  createQuery,
};
