import mongoose from 'mongoose';

const pojSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true,
  },
  channelIds: {
    type: [String],
    default: [],
  },
});

export const PojModel = mongoose.model('Poj', pojSchema);
