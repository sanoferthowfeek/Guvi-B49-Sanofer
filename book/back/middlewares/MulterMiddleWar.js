import multer from 'multer'
import {v4 as uuidv4} from 'uuid'
import path from 'path'

const storage = multer.diskStorage({
    destination: function( req, file, cb){
        cb(null, './public/uploads')
        // console.log("file",file);
    },
    filename: function (req, file, cb){
   
        const uniqueSuffix= uuidv4() + path.extname(file.originalname)
        // console.log("uniqueSuffix", uniqueSuffix);
        cb(null, uniqueSuffix)
        // console.log("file",file);
    }
})

const fileFilter= (req, file, cb)=>{
    const allowFileType= [
        "image/png",
    "image/peng",
    "image/jpg",
    "image/jpeg",
    ];
    if (allowFileType.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null ,  false)
    }
}

const uploadMiddleWar= multer({storage, fileFilter})

export default uploadMiddleWar;