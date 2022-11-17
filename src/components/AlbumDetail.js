import React from "react";
import arrow from "../assets/images/right-arrow-svgrepo-com.svg";
import { useFetch } from "./../useFetch";
import Person from "./Person";
import { useState, useEffect } from "react";
import AlbumPageCover from "./AlbumPageCover";
import { useDispatch,useSelector } from "react-redux";
import Modal from "./Modal";
import { openModal } from "../features/modal/modalSlice";
const Album = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  
// const { persons, isLoading } = useSelector((store) => store.album);
// const { isOpen } = useSelector((store) => store.modal);
// const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch();
//   }, [persons]);


  useEffect(() => {
    if (loading) return;
    setUsers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

    const prevPage = () => {
      setPage((oldPage) => {
        let prevPage = oldPage - 1;
        if (prevPage < 0) {
          prevPage = data.length-1;
        }
        return prevPage;
      });
    };
  return (
    <section className="py-5">
      {/* {isOpen && <Modal />} */}
      <h1 className="text-center">
        {loading ? "loading..." : "Sticker Album"}{" "}
      </h1>
      <div className="underline"></div>
      <div className="container">
        <div className="row border py-5 position-relative">
          <div className="btn-group">
            <button onClick={prevPage}>
              <img src={arrow} alt="" style={{ transform: "rotate(180deg)" }} />
            </button>
            <button onClick={nextPage}>
              <img src={arrow} alt="" />
            </button>
          </div>
          {page + 1 === 1 && <AlbumPageCover  />}

          <div className={page + 1 === 1 ? "col-md-6" : "col-md-12"}>
            <div className="row">
              {users.map((person) => {
                return <Person key={person.id} page={page} {...person} />;
              })}
            </div>
          </div>
          {!loading && (
            <div className="btn-container mt-4">
              {data.map((item, index) => {
                return (
                  <button
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    } `}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          )}
          <button className="sticker-btn"> {/*onClick={() => dispatch(openModal())*/}
            Get your daily stickers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Album;
