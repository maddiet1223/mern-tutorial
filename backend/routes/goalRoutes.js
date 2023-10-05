const express = require('express');
const router = express.Router();
const {getGoals, setGoals, deleteGoals, updatetGoals} = require('../controllers/goalControllers')
const {protect} = require('../middleware/authMiddleware')


router.route('/').get(protect,getGoals).post(protect,setGoals)

router.route('/:id').put(protect,updatetGoals).delete(protect,deleteGoals)

// router.get('/',getGoals)

// router.post('/',setGoals)

// router.put('/:id',updatetGoals)

// router.delete('/:id',deleteGoals)

module.exports = router