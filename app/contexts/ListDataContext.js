import React, { createContext, useState } from 'react';

export const ListDataContext = createContext();

export const ListDataProvider = ({ children }) => {
  const [listData, setListData] = useState([
    { id: '1', title: 'Plant 1', time: 7200 },
    { id: '2', title: 'Plant 2', time: 1080 },
    { id: '3', title: 'Plant 3', time: 7200 },
    { id: '4', title: 'Plant 4', time: 0 },
  ]);

  return (
    <ListDataContext.Provider value={{ listData, setListData }}>
      {children}
    </ListDataContext.Provider>
  );
};
