// backend/models/Content.js
import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  page: { type: String, required: true, enum: ['home', 'about', 'services', 'contact'] },
  section: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed, required: true },
  lastUpdated: { type: Date, default: Date.now }
}, { versionKey: false });

export default mongoose.model('Content', contentSchema);