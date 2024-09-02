const express = require('express');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
// Atualizar perfil
router.put('/update', authenticateToken, async (req, res) => {
    const { firstName, lastName, phone } = req.body;
    const userId = req.user.userId;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { firstName, lastName, phone }, { new: true });
        res.status(200).json({ msg: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ msg: 'Error updating profile', error });
    }
});

module.exports = router;
