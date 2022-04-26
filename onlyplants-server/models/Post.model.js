const { Schema, model } = require('mongoose');

const postSchema = new Schema(
	{
		image: { type: 'string', required: true },
		plantType: String,
		description: String,
		creator: { type: Schema.Types.ObjectId, ref: 'User' },
		likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
	},
	{
		timestamps: true,
	}
);

const Post = model('Post', postSchema);

module.exports = Post;
