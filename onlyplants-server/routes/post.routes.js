const router = require('express').Router();

const User = require('../models/User.model');
const Post = require('../models/Post.model');

router.post('/post', async (req, res) => {
	const { image, creator, plantType, description } = req.body;
	try {
		const newPost = await Post.create({
			creator,
			image,
			plantType,
			description,
		});
		const updatedUser = await User.findByIdAndUpdate(creator, {
			$push: { posts: newPost },
		});
		res.json(newPost);
	} catch (error) {
		console.log(error);
	}
});

router.get('/post/:postId', async (req, res) => {
	const { postId } = req.params;
	try {
		const post = await Post.findById(postId).populate('creator');
		res.json(post);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
