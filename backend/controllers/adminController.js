// backend/controllers/adminController.js
import Content from '../models/Content.js';

// Obtener todo el contenido de una página
export const getPageContent = async (req, res) => {
  try {
    const { page } = req.params;
    const contents = await Content.find({ page });
    res.json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar sección específica
export const updateSection = async (req, res) => {
  try {
    const { page, section } = req.params;
    const content = await Content.findOneAndUpdate(
      { page, section },
      { content: req.body.content, lastUpdated: Date.now() },
      { new: true, upsert: true }
    );
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener sección específica
export const getSection = async (req, res) => {
  try {
    const { page, section } = req.params;
    const content = await Content.findOne({ page, section });
    res.json(content || { content: {} });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};