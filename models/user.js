import mongoose from 'mongoose';
import crypto from 'crypto';
import uuidv1 from 'uuid/v1';

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			maxlength: 32
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: 32
		},
		hashed_password: {
			type: String,
			required: true
		},
		about: {
			type: String,
			trim: true
		},
		salt: String,
		role: {
			type: Number,
			default: 0
		},
		history: {
			type: Array,
			default: []
		}
	},
	{ timestamps: true }
);
