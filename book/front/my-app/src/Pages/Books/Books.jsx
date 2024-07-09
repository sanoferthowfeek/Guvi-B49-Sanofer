import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner.jsx";

const Books = () => {
  const [books, setBooks] = useState([]);
  // console.log(books);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/book/get-book")
      .then((res) => {
        // console.log(res.data.books);
        setBooks(res.data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        <div className=''>
          <div className="my-4 mx-4 add-new">
            <Link to={"/Add"} className="fs-2 n-book">
              Add Book &nbsp; <i className="fa-solid fa-plus" style={{color:'blueviolet'}}></i>
            </Link>
          </div>
          <div className="container">
          <div className="row my-5 text-center">
            {books.map((e) => (
              <div
                className="borders-book col-11 col-sm-10 col-md-6 col-lg-4 col-xl-3 mx-auto my-2"
                key={e._id}
              >
                <div className="card bg-light" style={{ width: "18rem" }}>
                  <img
                    src={`http://localhost:4000/uploads/${e.BookImg_Url}`}
                    height='250'
                    width='100'
                    alt={e.BookTitle}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 style={{color:'blueviolet'}}>{e.BookTitle}</h3>
                    <hr style={{color:'blueviolet', height:'2px'}}/>
                    <p className="card-text">
                      <span style={{ color: "red" }} className="overflow-auto">Introduction</span> :{" "}
                      {e.BookIntro}
                    </p>
                    <div className="my-4 box-book">
                    <Link to={`/Read/${e._id}`} className='home-btn my-4'>
                      Read Book
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Books;