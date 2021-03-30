import React, { useEffect, useState } from 'react';
import './ShowName.scss';

const ShowName = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [user, setUser] = useState('');

  const randomIndex = (data) => {
    return Math.floor(Math.random() * data.length);
  };

  const callApi = async () => {
    const url = 'https://api.github.com/users';
    const response = await fetch(url);
    const data = await response.json();
    setDataUsers(data);
    setUser(data[randomIndex(data)].login);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="showName">
      {dataUsers.length === 0 ? (
        <span>Loading...</span>
      ) : (
        <div>
          <h1>{user}</h1>
          <button
            type="button"
            onClick={() => setUser(dataUsers[randomIndex(dataUsers)].login)}
          >
            Click to change text
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowName;
