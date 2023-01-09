import { useRef, useState, useEffect } from "react";

const FourthRow = (props) => {
  const currentColorFirst = useRef("");
  const currentColorSecond = useRef("");
  const currentColorThird = useRef("");
  const currentColorFourth = useRef("");
  const [darkResults, setDarkResult] = useState([]);
  const [whiteResults, setWhiteResults] = useState([]);
  let darkResultsTEMP = [];
  let whiteResultsTEMP = [];

  useEffect(() => {
    if (props.resetIsTrue) {
      setDarkResult([]);
      setWhiteResults([]);
    }
  }, [props.resetIsTrue]);

  props.resetIsTrue
    ? (currentColorFirst.current.style.background = "gray") &&
      (currentColorSecond.current.style.background = "gray") &&
      (currentColorThird.current.style.background = "gray") &&
      (currentColorFourth.current.style.background = "gray")
    : null;

  const playerChoseColorHandler = (event) => {
    if (props.currentRow === "row-4") {
      event.target.style.background = props.chosenColor;
    }
  };

  const submitHandler = () => {
    let color1_row1 = currentColorFirst.current.style.background;
    let color2_row1 = currentColorSecond.current.style.background;
    let color3_row1 = currentColorThird.current.style.background;
    let color4_row1 = currentColorFourth.current.style.background;

    if (
      color1_row1 === props.drawnArray[0] &&
      color2_row1 === props.drawnArray[1] &&
      color3_row1 === props.drawnArray[2] &&
      color4_row1 === props.drawnArray[3]
    ) {
      props.setWin(true);
    }

    let userChosenArray = [color1_row1, color2_row1, color3_row1, color4_row1];

    for (let i = 0; i < 4; i++) {
      if (props.drawnArray[i] === userChosenArray[i]) {
        darkResultsTEMP.push("result_black");
        setDarkResult(darkResultsTEMP);
      } else if (
        props.drawnArray.includes(userChosenArray[i]) &&
        !darkResultsTEMP.includes(userChosenArray[i])
      ) {
        whiteResultsTEMP.push("result_white");
        setWhiteResults(whiteResultsTEMP);
      }
    }

    props.setUserChosenColors(userChosenArray);
    props.setCurrentRow("row-5");
  };

  let whiteDivs = whiteResults.map((_, index) => (
    <div key={index} className="result_white"></div>
  ));
  let blackDivs = darkResults.map((_, index) => (
    <div key={index} className="result_black"></div>
  ));
  let basicDivs = Array(4 - whiteResults.length - darkResults.length).fill(
    <div className="result_basic"></div>
  );

  return (
    <div id="row-4" class="color-row">
    <div className="color_container">
      <div
        onClick={playerChoseColorHandler}
        ref={currentColorFirst}
        class="color"
      ></div>
      <div
        onClick={playerChoseColorHandler}
        ref={currentColorSecond}
        class="color"
      ></div>
      <div
        onClick={playerChoseColorHandler}
        ref={currentColorThird}
        class="color"
      ></div>
      <div
        onClick={playerChoseColorHandler}
        ref={currentColorFourth}
        class="color"
      ></div>
      <div className="results_container">
        {whiteDivs}
        {blackDivs}
        {basicDivs}
      </div>
</div>
      <button
        onClick={submitHandler}
        className={
          props.currentRow === "row-4" ? "active_button" : "inactive_button"
        }
      >
        Submit
      </button>
    </div>
  );
};

export default FourthRow;
