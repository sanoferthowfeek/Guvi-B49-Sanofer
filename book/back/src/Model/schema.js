import mongoose from "mongoose";

const BookStore= new mongoose.Schema({
    BookTitle:{
        type:String,
        required:[true, 'Title is Required']
    },
    BookAuthor:{
        type:String,
        required:[true, 'Author is Required']
    },
    BookImg_Url:{
        type:String,
        required:[true, 'Image is Required']
    },
    BookIntro:{
        type:String,
        required:[true, 'Introduction is Required']
    },
    BookDesc:{
        type:String,
        required:[true, 'Description is Required']
    },
    BookPublishYear:{
        type:Number,
        required:[true, 'Publish Year is Required']
    }

},
{timestamps:true},
{versionKey:false}
)

const BookSchema= mongoose.model('books', BookStore)

export default BookSchema