import { createContext, useState, useEffect } from "react";

export const EditorialContext = createContext(null);

const EditorialProvider = ({ children }) => {
  const [editorial, setEditorial] = useState([]);

  return (
    <EditorialContext.Provider value={{editorial, setEditorial}}>
      {children}
    </EditorialContext.Provider>
  );
};

export default EditorialProvider;
