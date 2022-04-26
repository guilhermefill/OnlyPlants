const { Schema, model } = require('mongoose');

const postSchema = new Schema(
	{
		comment: { type: 'string', required: true },
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		post: { type: Schema.Types.ObjectId, ref: 'Post' },
	},
	{
		timestamps: true,
	}
);

const Post = model('Post', postSchema);

module.exports = Post;
