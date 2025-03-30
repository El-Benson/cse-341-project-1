const express = require('express');
const router = express.Router();

// Sample data
const contacts = [
  {
    _id: "67cebb692febcfd73db189e9",
    email: "adebensonkehinde@gmail.com",
    username: "MichaelBenson",
    name: "Michael Benson",
    ip_address: "94.121.168.53"
  }
];

// GET all contacts
router.get('/', (req, res) => {
  res.json(contacts);
});

// GET a single contact by ID
router.get('/:id', (req, res) => {
  const contact = contacts.find(c => c._id === req.params.id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
});

// POST a new contact
router.post('/', (req, res) => {
  const newContact = req.body;
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// PUT (Update contact)
router.put('/:id', (req, res) => {
  const index = contacts.findIndex(c => c._id === req.params.id);
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...req.body };
    res.json(contacts[index]);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
});

// DELETE a contact
router.delete('/:id', (req, res) => {
  const index = contacts.findIndex(c => c._id === req.params.id);
  if (index !== -1) {
    contacts.splice(index, 1);
    res.json({ message: 'Contact deleted' });
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
});

module.exports = router;
