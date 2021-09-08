import React, { useState } from "react";
import Lists from "./components/Lists";
import "./App.css";
import AddedList from "./components/AddedList";

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

const App: React.FC = () => {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "chalik", url: "", age: 21, note: "Student Of Telkom University" },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <Lists people={people} />
      <AddedList people={people} setPeople={setPeople}/>
    </div>
  );
};

export default App;
