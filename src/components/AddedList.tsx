import React, { useState, VoidFunctionComponent } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddedList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    age: "",
    note: "",
  });

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.image || !input.note) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.image,
        note: input.note,
      },
    ]);
    setInput({ name: "", image: "", age: "", note: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="addToList">
      <input
        type="text"
        name="name"
        value={input.name}
        placeholder="name"
        className="addToList-input"
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        value={input.image}
        placeholder="url"
        className="addToList-input"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={input.age}
        placeholder="age"
        className="addToList-input"
        onChange={handleChange}
      />
      <textarea
        name="note"
        className="addToList-input"
        placeholder="notes"
        onChange={handleChange}
        value={input.note}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default AddedList;
