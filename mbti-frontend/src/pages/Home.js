import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Choice from './components/Choice.js';
import Description from './components/Description.js';

function Home({ setMbti }) {
  const [EorI, setEorI] = useState('X');
  const [SorN, setSorN] = useState('X');
  const [TorF, setTorF] = useState('X');
  const [JorP, setJorP] = useState('X');
  const [MyMBTI, setMyMBTI] = useState(EorI + SorN + TorF + JorP);

  function setData(data, setPerData) {
    setPerData(data);
  }

  function ClickChoice() {
    setMyMBTI(EorI + SorN + TorF + JorP);
  }

  function handleSubmit() {
    setMyMBTI(EorI + SorN + TorF + JorP);
    setMbti(MyMBTI);
    console.log(MyMBTI);
    console.log('전송 성공');
  }

  return (
    <div className="homeBody">
      <header className="header">
        <span>MBTI</span>
        <Link className="home_to_admin" to="/admin">
          관리자 페이지
        </Link>
      </header>
      <div className="for_home_array">
        <main className="Choice_all">
          {/* E or I */}
          <div className="Choice_obj" onClick={ClickChoice}>
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
          <div className="Choice_obj" onClick={ClickChoice}>
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
          <div className="Choice_obj" onClick={ClickChoice}>
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
          <div className="Choice_obj" onClick={ClickChoice}>
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

        {/* 나의 MBTI 전송 */}
        <Link to="/result">
          <button
            className="home_to_result"
            onMouseEnter={ClickChoice}
            onClick={handleSubmit}
          >
            확인
          </button>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
}

export default Home;
