const express = require('express');
const router = express.Router();
const {getGoals, setGoals, deleteGoals, updatetGoals} = require('../controllers/goalControllers')


router.route('/').get(getGoals).post(setGoals)

router.route('/:id').put(updatetGoals).delete(deleteGoals)

// router.get('/',getGoals)

// router.post('/',setGoals)

// router.put('/:id',updatetGoals)

// router.delete('/:id',deleteGoals)

module.exports = router