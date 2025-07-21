const express = require("express");
const Material = require("../models/Material");
const router = express.Router();

router.get("/", async (req, res) => {
  const materials = await Material.find();
  res.json(materials);
});

router.post("/", async (req, res) => {
  const material = new Material(req.body);
  await material.save();
  res.status(201).json(material);
});

router.put("/:id", async (req, res) => {
  const updated = await Material.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Material.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
