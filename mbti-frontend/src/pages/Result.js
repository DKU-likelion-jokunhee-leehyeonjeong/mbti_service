import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ mbti }) {
  const [mbtiInfo, setMbtiInfo] = useState('');

  useEffect(() => {
    console.log('useEffect 사용 확인');
    fetchMbtiInfo();
  });

  const fetchMbtiInfo = async () => {
    try {
      const response = await fetch(`Backend주소/${mbti}`);
      const data = await response.json();
      console.log(data);
      const mbtiCharacter = data.info;
      setMbtiInfo(mbtiCharacter ? mbtiCharacter : '정보가 없습니다.');
      console.log(mbtiCharacter);
    } catch (error) {
      console.error('Error fetching MBTI information:', error);
      setMbtiInfo('응 에러야~');
    }
  };

  return (
    <div className="homeBody">
      <header className="header">
        <span>MBTI</span>
      </header>
      <div className="result_space">
        <span className="result_title">{mbti}는 </span>
        <div>
          <p className="result_main">{mbtiInfo}</p>
        </div>
        <div>
          <Link to="/">
            <button className="result_link">홈</button>
          </Link>
          <Link to="/admin">
            <button className="result_link">관리자 페이지</button>
          </Link>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

export default Home;
