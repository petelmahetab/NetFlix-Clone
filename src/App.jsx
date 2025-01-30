import React from "react";
import "./index.css";
import { styled, keyframes } from "styled-components";
import { useState } from "react";

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  //length of arr
  const length = 100 / arr.length - 1;
  //we require 3 states

  const [state, setstate] = useState(arr[0]);
  const [initial, setinitial] = useState(0);
  const [completed, setcompleted] = useState(0);
  function handleNextMove() {
    //
    setstate((pre) => {
      return pre + 1;
    });
    setinitial(completed);
    setcompleted((pre) => {
      return pre + length;
    });
  }

  return (
    <>
      <div className="parent">
        <StyleLine $initial={initial} $completed={completed}>
          <div className="inner-line">
            {arr.map((item, id) => {
              return (
                <div
                  key={id}
                  className={
                    state === item
                      ? "current-circle"
                      : state > item
                      ? "filled-circle"
                      : "circles"
                  }
                >
                  <h1>{item}</h1>
                </div>
              );
            })}
          </div>
        </StyleLine>
      </div>
      <button className="btn" onClick={handleNextMove}>
        Move Next➡️
      </button>
    </>
  );
};

const Animation = ($initial, $completed) => keyframes`
  from{
    width:{$initial}%;
    background-color:white;
  }
  to {
     width:{$completed}%;
    background-color:blue;
  }
`;

const StyleLine = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  animation: ${(props) => Animation(props.$initial, props.$completed)} 3s
    forward;
`;

export default App;
