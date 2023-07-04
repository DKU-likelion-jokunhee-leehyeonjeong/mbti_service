import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Choice from './components/Choice.js';
import Description from './components/Description.js';

function Admin() {
  const [EorI, setEorI] = useState('X');
  const [SorN, setSorN] = useState('X');
  const [TorF, setTorF] = useState('X');
  const [JorP, setJorP] = useState('X');
  const [MyMBTI, setMyMBTI] = useState(EorI + SorN + TorF + JorP);
  const [mbtiInfo, setMbtiInfo] = useState('');

  function setData(data, setPerData) {
    setPerData(data);
  }

  function ClickChoice(e) {
    setMyMBTI(EorI + SorN + TorF + JorP);
    console.log(MyMBTI);
    console.log(mbtiInfo);
  }

  const handleMbtiInfoChange = (event) => {
    setMbtiInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = {
      mbti: MyMBTI,
      info: mbtiInfo,
    };

    fetch('BackEnd 주소', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('POST 요청 성공:', data);
        alert('성공!');
        console.log(postData);
      })
      .catch((error) => {
        console.error('POST 요청 실패:', error);
      });
  };

  return (
    <div className="homeBody">
      <header className="header">
        <span>MBTI</span>
        <Link className="admin_to_home" to="/">
          홈으로 나가기
        </Link>
      </header>
      <div className="char_add_form_title_array">
        <span className="char_add_form_title"> 성향 추가 </span>
      </div>
      <div className="for_home_array">
        {/* 성향을 추가하는 form */}
        <form className="char_add_form" onSubmit={handleSubmit}>
          <input
            className="inputBox"
            type="text"
            placeholder="MBTI의 특징을 적어주세요"
            onChange={handleMbtiInfoChange}
          ></input>
          <main className="Choice_all">
            {/* E or I */}
            <div className="Choice_obj" onMouseEnter={ClickChoice}>
              <Choice
                personality="E"
                getPerData={setData}
                setFunc={setEorI}
              ></Choice>
              <Description text="에너지 방향"></Description>
              <Choice
                personality="I"
                getPerData={setData}
                setFunc={setEorI}
              ></Choice>
            </div>

            {/* S or N */}
            <div className="Choice_obj" onMouseEnter={ClickChoice}>
              <Choice
                personality="S"
                getPerData={setData}
                setFunc={setSorN}
              ></Choice>
              <Description text="인식 방향"></Description>
              <Choice
                personality="N"
                getPerData={setData}
                setFunc={setSorN}
              ></Choice>
            </div>

            {/* T or F */}
            <div className="Choice_obj" onMouseEnter={ClickChoice}>
              <Choice
                personality="T"
                getPerData={setData}
                setFunc={setTorF}
              ></Choice>
              <Description text="판단"></Description>
              <Choice
                personality="F"
                getPerData={setData}
                setFunc={setTorF}
              ></Choice>
            </div>

            {/* J or P */}
            <div className="Choice_obj" onMouseEnter={ClickChoice}>
              <Choice
                personality="J"
                getPerData={setData}
                setFunc={setJorP}
              ></Choice>
              <Description text="생활양식"></Description>
              <Choice
                personality="P"
                getPerData={setData}
                setFunc={setJorP}
              ></Choice>
            </div>
          </main>

          {/* MBTI 성향 전송 */}
          <button className="save_button" onMouseEnter={ClickChoice}>
            MBTI 성향 추가
          </button>
        </form>
      </div>
      <footer></footer>
    </div>
  );
}

export default Admin;
