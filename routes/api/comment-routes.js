const router = require('express').Router();

const { addComment, removeComment } = require('../../controllers/comment-controllers');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
//DELETE comments route for pizzas (by _id)
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;