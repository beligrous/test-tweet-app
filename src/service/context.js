import { createContext, useContext, useState } from "react";

const followContext = createContext({});

export const useFollow = () => useContext(followContext);

export const FollowProvider = ({ children }) => {
  const [follow, setFollow] = useState(() =>
    JSON.parse(localStorage.getItem("follow"))
  );
  let array = [];

  const addFollow = (data) => {
    array = [...follow, data];
    setFollow(array);
    localStorage.setItem("follow", JSON.stringify(array));
  };

  const removeFollow = (data) => {
    array = follow.filter((item) => item.id !== data.id);
    setFollow(array);
    localStorage.setItem("follow", JSON.stringify(array));
  };

  return (
    <followContext.Provider value={{ follow, addFollow, removeFollow }}>
      {children}
    </followContext.Provider>
  );
};
