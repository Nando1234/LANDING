// backend/routes/adminRoutes.js
import express from 'express';
import { 
  getPageContent, 
  updateSection, 
  getSection 
} from '../controllers/adminController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect, admin); // Protege todas estas rutas

router.get('/:page', getPageContent);
router.route('/:page/:section')
  .get(getSection)
  .put(updateSection);

export default router;