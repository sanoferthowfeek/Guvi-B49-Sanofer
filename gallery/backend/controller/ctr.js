import schema from '../model/schema.js'

const openView=async (req,res)=>{
    try {
        res.status(200).send(`
        <html>
        <head>
        </head>
        <body>
        <h1>Welcome To Server Side Application</h1>
        </body>
        </html>
        `)
        
    } catch (error) {
        console.log(error);
    }
}

const getData=async(req,res)=>{
    try {
        let data=await schema.find().sort({createdAt:'descending'})
        res.status(200).send({
            success:true,
            count:data.length,
            message:"Successfully Fetched Data",
            data

        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:`Failed to fect the data`,
            error:`${error}`
        })
    }
}

const uploads=async(req,res)=>{
    try {
       const photo =req.file.filename
    //    console.log("photo", photo);
       let data=await schema.create({photo})
    //    console.log("data", data);
       res.status(200).send({
        success:true,
        message:"Successfully Uploded",
        data
       })
// localStorage.setItem("magi")
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:`Failed to upload`,
            error:`${error}`
        })
    }
}

const remove=async(req,res)=>{
    try {
       const {id}=req.params
       const data=await schema.findByIdAndDelete(id)
    //    console.log("data", data);
       if (data) {
        res.status(200).send({
            success:true,
            message:"Image Successfully Deleted",
           })
       }
       else{
        res.status(404).send({
            message:"Image not Found",
            success:false
        })
    }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:`Failed to delete`,
            error:`${error}`
        })
    }
}

export default {
    openView,
    uploads,
    remove,
    getData
}