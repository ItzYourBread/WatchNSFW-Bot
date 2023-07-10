import mongoose from 'mongoose';

const guildSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true,
  },
  pojChannels: {
    type: [String],
    default: [],
  },
});

export const Guild = mongoose.model('Guild', guildSchema);
