import React from "react";
import { useNavigate } from "react-router-dom";
import './loading.css';

const Page2 = () => {
  return (
    <div className="background">
      <div className="dot-loader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      
      <p className="loading-text">매칭결과는 오늘 11PM에 발표됩니다!</p>
    </div>
  );
};

export default Page2;