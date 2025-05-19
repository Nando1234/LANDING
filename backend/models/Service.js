import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  sectors: [{
    type: String
  }],
  features: [{
    title: String,
    description: String
  }]
});

export default mongoose.model('Service', serviceSchema);