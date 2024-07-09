import BookSchema from "../Model/schema.js";

//SERVER PAGE
const getServerPage=async(req,res)=>{
    try {
     console.log(req)
    res.status(200).send(`
    <h1><b>MERN STACK BOOK STORE APP</b></h1>
    `)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

//GET BOOK
const getBook=async(req,res)=>{
    try {     
        const books =await BookSchema.find({})
        // console.log('book',book);
        res.status(200).send({
            totalBooks:books.length,
            message:"Successfully Fetched Book Details",
            success:true,
            books
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Internel Server Error",
            success:false,
            error:`${error}`
        })
    }
}

//GET BOOK
const getSingleBook=async(req,res)=>{
    try {    
        const {id}=req.params 
        const books =await BookSchema.findById({_id:id})
        // console.log('book',book);
       if(books){
        res.status(200).send({
            totalBooks:books.length,
            message:"Successfully Fetched simgle Book Detail",
            success:true,
            books
        })
       }
       else{
        res.status(404).send({
            message:"Book Not Found",
            success:false
        })
       }
        
    } catch (error) {
        res.status(500).send({
            message:"Internel Server Error",
            success:false,
            error:`${error}`
        })
    }
}

//ADD BOOK
const addBook=async(req,res)=>{
    try {
        let photo= req.file.filename
        // console.log("photo",photo);
        // console.log("req.body",req.body); 
//   console.log("req.file",req.file); 
        const newBook={
            BookTitle: req.body.BookTitle,
            BookAuthor: req.body.BookAuthor,
            BookImg_Url:photo,
            BookIntro: req.body.BookIntro,
            BookDesc:req.body.BookDesc,
            BookPublishYear: req.body.BookPublishYear
        }
        // console.log('newBook',newBook);
        const data=await BookSchema.findOne({BookTitle:req.body.BookTitle})
        // console.log("data",data);
        if(!data){
            const book =await BookSchema.create(newBook)
        // console.log('book',book);
        res.status(201).send({
            message:"SUccessfully Book Added",
            success:true,
            book
        })
        }
        else{
            res.status(400).send({
                message:"Book Already Exist",
                success:false
            })
        }
        
        
    } catch (error) {
        res.status(500).send({
            message:"Internel Server Error",
            success:false,
            error:`${error}`
        })
    }
}

//EDIT BOOK
const updateBook=async(req,res)=>{
    try {
        const {id}=req.params
        let photo= req.file.filename
        // let data=req.body
        // console.log('data', data);
        const updateBook={
            BookTitle: req.body.BookTitle,
            BookAuthor: req.body.BookAuthor,
            BookImg_Url:photo,
            BookIntro: req.body.BookIntro,
            BookDesc:req.body.BookDesc,
            BookPublishYear: req.body.BookPublishYear
        }
        // console.log(updateBook,'updateBook');

        const book=await BookSchema.findByIdAndUpdate({_id:id},updateBook)
       if (book){
        res.status(200).send({
         message:"Book Updated Successfully",
            success:true,
            book
        })
       }
       else{
        res.status(404).send({
            message:"Book not Found",
            success:false
        })
       }
        
    } catch (error) {
        res.status(500).send({
            message:"Internel Server Error",
            success:false,
            error:`${error}`
        })
    }
}

//DELETE BOOK
const deleteBook=async(req,res)=>{
    try {
        const {id}=req.params
        const book=await BookSchema.findByIdAndDelete({_id:id})
       if(book){
        res.status(200).send({
            message:"This Book Deleted Successfully",
            success:true,
            book
        })
       }
       else{
        res.status(404).send({
            message:"Book not Found",
            success:false
        })
       }
        
    } catch (error) {
        res.status(500).send({
            message:"Internel Server Error",
            success:false,
            error:`${error}`
        })
    }
}

export default {
    getServerPage,
    getBook,
    getSingleBook,
    addBook,
    updateBook,
    deleteBook
}