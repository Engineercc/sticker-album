import React, { useEffect, useState } from "react";
import logo from "../assets/images/team-logo-1.png";
import Person from "./Person";
import { useFetch } from "./../useFetch";
const AlbumPageCover = () => {
  const { loading, data } = useFetch();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setUsers(data[3]);
  }, [loading]);

  let newArr = users.slice(0,2);
  let newArr2= users.slice(4,7);
  console.log(newArr);
  return (
    <div className="col-md-6">
      <div className="row">
        <div className="team-logo col-md-4">
          <img src={logo} alt="" className="w-100" />
        </div>
        <div className="team-desc col-md-8">
          <h1>Web Team</h1>
          <h2>Blazing Fast Web</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non
            quod enim nulla maiores obcaecati magni repellat ab harum nostrum
            repellendus placeat adipisci accusantium, eius assumenda
            perspiciatis vel ipsum quis.
          </p>
          <h4>#web-public slack channel</h4>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-col gap-4 place-items-center">
        {newArr.map((person) => {
          return (
            <div className="w-2/3">
              <div className="person">
                <img src={person.img} alt="" />
                <div className="person-info">
                  <span>{person.name}</span>
                  <span>{person.title}</span>
                  <span>{Math.ceil(person.experience / 10000)} Year</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 grid-flow-col gap-4">
        {newArr2.map((person) => {
          return (
            <div className="">
              <div className="person">
                <img src={person.img} alt="" />
                <div className="person-info">
                  <span>{person.name}</span>
                  <span>{person.title}</span>
                  <span>{Math.ceil(person.experience / 10000)} Year</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlbumPageCover;
