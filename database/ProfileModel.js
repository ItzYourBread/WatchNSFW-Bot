import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
	id: { type: String, unique: true, required: true },
});

export const ProfileModel = mongoose.model('Profile', profileSchema);