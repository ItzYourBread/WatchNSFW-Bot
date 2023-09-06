import mongoose from 'mongoose';

const guildSchema = new mongoose.Schema({
  guildID: {
    type: String,
    required: true,
    unique: true,
  },
  collabChannels: {
    type: [Array], 
    default: [], // You can provide a default empty array if needed
  },
});

export const GuildData = mongoose.model('GuildData', guildSchema);
