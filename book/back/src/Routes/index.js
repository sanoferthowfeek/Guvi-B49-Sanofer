import express from 'express'
import bookController from '../Controller/bookController.js'
import bookRoutes from './bookRoutes.js'

const router=express.Router()

router.get('/', bookController.getServerPage)

router.use('/book', bookRoutes)


export default router