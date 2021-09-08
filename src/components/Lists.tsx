import React from "react";
import { IState as IProps } from "../App";

const Lists: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-Header">
            <img src={person.url} className="List-Image" alt="" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age}</p>
          <p>{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default Lists;
