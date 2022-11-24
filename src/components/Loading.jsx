import React from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {

  const navigate = useNavigate()

  const changePage = () => {
    setTimeout(() => {
      navigate('/pokedex')
    }, 5000)
  }

  return (
    <div className='loading'>
      <img src="src\assets\JO4d.gif" alt=""/>
      {changePage()}
    </div>
  );
};

export default Loading;