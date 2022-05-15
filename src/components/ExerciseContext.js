import { createContext, useState } from "react";
const ExerciseContext = createContext();

export function ExerciseProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToList = (name) => {
    setItems((prevState) => [...prevState, { name }]);
  };
  return (
    <ExerciseContext.Provider value={{ items, addToList }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export default ExerciseContext;
