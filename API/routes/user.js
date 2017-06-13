import express from 'express';
import userController from './../controllers/user';

const router = express.Router();

router.route('/:id')
  .put(userController.update);

router.route('/:id')
  .get(userController.getById);

export default router;
