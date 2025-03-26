import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './C1.css';

const Page1 = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState(true);
  const [isBurden, setIsBurden] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleSelection = (interest) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(item => item !== interest);
      } else {
        return [...prev, interest];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userData = {
        nickName: nickname,
        gender: gender,
        isBurden: isBurden,
        interests: selectedInterests.join(',')
      };

      const response = await axios.post('http://localhost:4000/user', userData);
      
      if (response.status === 201) {
        console.log('사용자 생성 성공:', response.data);
        navigate('/page2'); // 성공 시 page2로 이동
      }
    } catch (error) {
      console.error('사용자 생성 실패:', error);
      alert('사용자 정보 저장에 실패했습니다.');
    }
  };

  const interests = [
    "운동", "음악", "여행", "사진&영상",
    "테크", "디자인", "도메인", "게임"
  ];

  return (
    <div>
      <header>
        <h3>두명의 러너가 친구가 되는</h3>
        <h1>두런두런</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <section className="intro">
            <h3 id="nick">
              제 닉네임은 
              <input 
                type="text" 
                id="nickname" 
                placeholder="닉네임을 영어로 입력하세요."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              /> 
              입니다.
            </h3>
            
            <input 
              type="radio" 
              name="gender" 
              value="male" 
              checked={gender === true}
              onChange={(e) => setGender(true)}
            /> 남성
            <input 
              type="radio" 
              name="gender" 
              value="female" 
              checked={gender === false}
              onChange={(e) => setGender(false)}
            /> 여성
            <br />
            
            <input 
              type="checkbox"
              checked={isBurden}
              onChange={(e) => setIsBurden(e.target.checked)}
            /> 이성과의 대화는 부담스러워요
            
            <h3 id="talk">제 관심사는</h3>
            <div className="interest-buttons">
              <div className="button-row">
                {interests.map((interest, index) => (
                  <button
                    type="button" // form 제출 방지
                    key={index}
                    className={`circle-btn ${selectedInterests.includes(interest) ? 'selected' : ''}`}
                    onClick={() => toggleSelection(interest)}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
            
            <button type="submit" id="btn">
              다음
            </button>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Page1;