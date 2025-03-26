import React, { useState, useEffect } from 'react';
import './Result.css';

const Sports2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalCards = 16;

  const updateCard = () => {
    const folder = 'sports2';  // sports2로 변경
    const fileNumber = String(currentIndex + 1).padStart(2, '0');
    const path = `${process.env.PUBLIC_URL}/Cards/sports2/sports2-${fileNumber}.png`;  // 경로 수정
    console.log('Loading image from:', path);
    return path;
  };

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
      console.log('Image loaded successfully');
    };
    img.onerror = (e) => {
      console.error('Error loading image:', e);
      setIsLoading(false);
    };
    img.src = updateCard();
  }, [currentIndex]);

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="question-container">
      <img 
        src={`${process.env.PUBLIC_URL}/logo.svg`} 
        alt="두런두런 로고" 
        className="logo" 
        onError={(e) => console.error('Logo loading error:', e)}
      />
      
      <div className="container">
        <img 
          id="question-card" 
          className={`card-viewer ${isLoading ? 'fade-out' : ''}`}
          src={updateCard()} 
          alt="질문 카드" 
          onError={(e) => console.error('Card loading error:', e)}
        />
    
        <div className="dot-nav">
          <div 
            className={`dot green ${currentIndex === 0 ? 'hidden' : ''}`} 
            onClick={goPrev}
          />
          <div 
            className={`dot yellow ${currentIndex === totalCards - 1 ? 'hidden' : ''}`} 
            onClick={goNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Sports2; 