import express from 'express'
import bookController from '../Controller/bookController.js'
import uploadMiddleWar from '../../middlewares/MulterMiddleWar.js'

const router=express.Router()

router.post('/create',uploadMiddleWar.single('photo'), bookController.addBook)
router.get('/get-book', bookController.getBook)
router.get('/getSingle-book/:id', bookController.getSingleBook)
router.put('/update/:id',uploadMiddleWar.single('photo'), bookController.updateBook)
router.delete('/delete/:id', bookController.deleteBook)


export default router