import React from "react";

const Person = ({ name, surname, title, experience, img,page }) => {
  return (
    <div className={page !==0 ? 'col-md-2' : 'col-md-4'}>
      <div className="person">
        <img src={img} alt={name} />
        <div className="person-info">
          <span>
            {name} {surname}
          </span>
          <span>{title}</span>
          <span>{Math.ceil(experience / 10000)} Year</span>
        </div>
      </div>
    </div>
  );
};

export default Person;
