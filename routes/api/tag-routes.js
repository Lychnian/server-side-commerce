const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Endpoint: /api/tags

// Route to get all tags
router.get('/', async (req, res) => {
  try {
    // Fetch all tags
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    // Error handling for fetching tags
    res.status(500).json(err);
  }
  // Be sure to include associated Product data
});

// Route to get a single tag by its ID
router.get('/:id', async (req, res) => {
  try {
    // Find a tag by its ID including associated Product data
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }], // Include associated Product data
    });

    if (!tagData) {
      // Handle case where tag is not found
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    // Error handling for fetching a tag by ID
    res.status(500).json(err);
  }
});

// Route to create a new tag
router.post('/', async (req, res) => {
  try {
    // Create a new tag with data from request body
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    // Error handling for tag creation
    res.status(400).json(err);
  }
});

// Route to update a tag by its ID
router.put('/:id', async (req, res) => {
  try {
    // Update the tag with specified ID using data from request body
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id }, // Update where ID matches
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    // Error handling for tag update
    res.status(500).json(err);
  }
});

// Route to delete a tag by its ID
router.delete('/:id', async (req, res) => {
  try {
    // Delete the tag with specified ID
    const tagData = await Tag.destroy({ where: { id: req.params.id } });
    if (!tagData) {
      // Handle case where tag is not found
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    // Error handling for tag deletion
    res.status(500).json(err);
  }
});

module.exports = router;
