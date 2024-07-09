import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

const Add = () => {
  const [BookTitle, setBookTitle] = useState("");
  const [BookAuthor, setBookAuthor] = useState("");
  const [BookImg_Url, setBookImg_Url] = useState(null);
  // console.log("BookImg_Url",BookImg_Url);
  const [BookIntro, setBookIntro] = useState("");
  const [BookDesc, setBookDesc] = useState("");
  const [BookPublishYear, setBookPublishYear] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const Navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const SaveBook = async () => {
    try {
      if (!BookTitle || !BookAuthor || !BookImg_Url || !BookIntro || !BookDesc || !BookPublishYear) {
        enqueueSnackbar("All fields are required", { variant: "error" });
        return;
      }  

      const formData = new FormData();
    formData.append('photo', BookImg_Url);
    formData.append('BookTitle', BookTitle);
    formData.append('BookAuthor', BookAuthor);
    formData.append('BookIntro', BookIntro);
    formData.append('BookDesc', BookDesc);
    formData.append('BookPublishYear', BookPublishYear);


      // const data = {
      //   BookTitle,
      //   BookAuthor,
      //   BookImg_Url,
      //   BookIntro,
      //   BookDesc,
      //   BookPublishYear,
      // };

      setLoading(true);    
      let res = await axios.post("http://localhost:4000/book/create", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
      // console.log(res.data);
      setLoading(false);
      message.success(res.data.message);
      enqueueSnackbar("Book Added successfully", { variant: "success" });
      Navigate("/Books");
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Failed to Add Book", { variant: "error" });
      message.error(`${error}`);
    }
  };

  const handleChange=(e)=>{
    // console.log("e", e.target.files[0]);
    setBookImg_Url(e.target.files[0])
  }

  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        <section>
          <div className="container add-book">
            <hr/>
            <h1 className="my-5">Add New <i className="fa-solid fa-book"></i> &nbsp; Book</h1>
            <hr/>
            <div className="row my-5">
              <div className="borders col-11 mx-auto col-md-10 col-sm-10 col-lg-9 col-xl-9">
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      required
                      className="form-control text-light"
                      aria-describedby="emailHelp"
                      placeholder="Book title"
                      value={BookTitle} onChange={(e)=>setBookTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="file"
                      required
                      className="form-control text-light"
                      aria-describedby="emailHelp"
                      placeholder="Image"
                       onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      required
                      className="form-control text-light"
                      aria-describedby="emailHelp"
                      placeholder="Author Name"
                      value={BookAuthor} onChange={(e)=>setBookAuthor(e.target.value)} 
                    />
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control  text-light"
                      required
                      placeholder="Leave a Introdution here"
                      id="floatingTextarea2"
                      style={{height: "100px"}}
                      value={BookIntro} onChange={(e)=>setBookIntro(e.target.value)}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Leave a Introdution here...</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control  text-light"
                      required
                      id="floatingTextarea2"
                      placeholder="Leave a Introdution here"
                      style={{height: "100px"}}
                      value={BookDesc} onChange={(e)=>setBookDesc(e.target.value)}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Leave a Descreption here..</label>
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      required
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Year"
                      value={BookPublishYear} onChange={(e)=>setBookPublishYear(e.target.value)}
                    />
                  </div>
                  <div className="button my-5">
                  <button type="button"  className="btn btn-primary w-25 fw-bold fs-5"  onClick={SaveBook} >Add Book</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Add;
   