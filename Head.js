import React from 'react';
import { useNavigate } from 'react-router-dom';

const Head = () => {
  const navigate = useNavigate(); // useNavigate kancasını çağır

  const handleButtonClick = () => {
    navigate('/about'); // 'about' sayfasına yönlendir
  };

  return (
    <div>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Custom jumbotron</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button" onClick={handleButtonClick}>
            About Sayfasına Git
          </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
