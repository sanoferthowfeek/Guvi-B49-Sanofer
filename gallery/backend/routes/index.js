import express from 'express'
import uploadMiddleware from '../middlewares/MulterMiddleware.js';
import ctr from '../controller/ctr.js';

const router =express.Router()

router.get('/', ctr.openView)

router.get('/getData', ctr.getData)

router.post('/save',uploadMiddleware.single('photo'), ctr.uploads )
router.delete('/remove/:id', ctr.remove )


export default router