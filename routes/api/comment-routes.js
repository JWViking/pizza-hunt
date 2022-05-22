const router = require('express').Router();

const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controllers');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
//DELETE comments or add comment route for pizzas (by _id)
router.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment);

//delete comment replies
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;