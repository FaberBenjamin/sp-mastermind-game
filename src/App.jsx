import { Fragment, useEffect, useRef, useState } from "react";
import "./App.css";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from "./FifthRow";
import SixthRow from "./SixthRow";
import Header from "./Header";
import Footer from "./Footer";
import NewGame from "./NewGame";
import WinModal from "./WinModal";
import FailModal from "./FailModal";

function App() {
  const [currentRow, setCurrentRow] = useState("row-1");
  const [userChosenColors, setUserChosenColors] = useState([]);
  const [drawnArray, setDrawnArray] = useState([]);
  const [chosenColor, setChosenColor] = useState("");
  const [resetIsTrue, setResetIsTrue] = useState(false);
  const [win, setWin] = useState(false);
  const [newGameOpen, setNewGameOpen] = useState(false);
  const [winOpen, setWinOpen] = useState(false);
  const [failedOpen, setFailedOpen] = useState(false);

  const drawnColors = () => {
    setNewGameOpen(true);
    setCurrentRow("row-1");
    setResetIsTrue(true);

    setTimeout(() => {
      setResetIsTrue(false);
    }, "100");

    let drawnableColor = ["green", "yellow", "red", "brown", "pink", "blue"];

    const array = Array(4)
      .fill()
      .map(() => Math.floor(drawnableColor.length * Math.random()));

    let firstDrawnColor = drawnableColor[array[0]];
    let secondDrawnColor = drawnableColor[array[1]];
    let thirdDrawnColor = drawnableColor[array[2]];
    let fourthDrawnColor = drawnableColor[array[3]];

    setDrawnArray([
      firstDrawnColor,
      secondDrawnColor,
      thirdDrawnColor,
      fourthDrawnColor,
    ]);
  };

  const colorClickHandler = (event) => {
    setChosenColor(event.target.id);
  };

  if (win === true) {
    setWinOpen(true);
    setWin(false);
  }

  if (currentRow === "row-7") {
    setCurrentRow("row-1");
    setFailedOpen(true);
  }

  return (
    <Fragment>
      <div className="mobile_view">
        <h1>Oh no...</h1>
        <p>
          This is a project still in development. The mobile layout is in
          progress. In this version you can only view the project at desktop or
          laptop :({" "}
        </p>
      </div>
      <div className="desktop_view">
        <WinModal
          open={winOpen}
          onClose={() => {
            setWinOpen(false);
          }}
        >
          <h3>Congratulations, you won!</h3>
        </WinModal>
        <FailModal
          open={failedOpen}
          onClose={() => {
            setFailedOpen(false);
          }}
        >
          <h3>Oh nooo, you lost...</h3>
        </FailModal>
        <Header />
        <div className="main_container">
          <div className="panel_container">
            <FirstRow
              currentRow={currentRow}
              chosenColor={chosenColor}
              setUserChosenColors={setUserChosenColors}
              setCurrentRow={setCurrentRow}
              drawnArray={drawnArray}
              resetIsTrue={resetIsTrue}
              setWin={setWin}
            />
            <SecondRow
              currentRow={currentRow}
              chosenColor={chosenColor}
              setUserChosenColors={setUserChosenColors}
              setCurrentRow={setCurrentRow}
              drawnArray={drawnArray}
              resetIsTrue={resetIsTrue}
              setWin={setWin}
            />

            <ThirdRow
              currentRow={currentRow}
              chosenColor={chosenColor}
              setUserChosenColors={setUserChosenColors}
              setCurrentRow={setCurrentRow}
              drawnArray={drawnArray}
              resetIsTrue={resetIsTrue}
              setWin={setWin}
            />

            <FourthRow
              currentRow={currentRow}
              chosenColor={chosenColor}
              setUserChosenColors={setUserChosenColors}
              setCurrentRow={setCurrentRow}
              resetIsTrue={resetIsTrue}
              drawnArray={drawnArray}
              setWin={setWin}
            />

            <FifthRow
              currentRow={currentRow}
              chosenColor={chosenColor}
              setUserChosenColors={setUserChosenColors}
              setCurrentRow={setCurrentRow}
              drawnArray={drawnArray}
              resetIsTrue={resetIsTrue}
              setWin={setWin}
            />

            <SixthRow
              currentRow={currentRow}
              chosenColor={chosenColor}
              setUserChosenColors={setUserChosenColors}
              setCurrentRow={setCurrentRow}
              resetIsTrue={resetIsTrue}
              drawnArray={drawnArray}
              setWin={setWin}
            />
          </div>
          <div className="color-choosable_container">
            <div class="choosables-colors">
              <div
                onClick={colorClickHandler}
                className={
                  chosenColor === "green"
                    ? "color-choosable_selected"
                    : "color-choosable"
                }
                id="green"
              ></div>
              <div
                onClick={colorClickHandler}
                className={
                  chosenColor === "yellow"
                    ? "color-choosable_selected"
                    : "color-choosable"
                }
                id="yellow"
              ></div>
              <div
                onClick={colorClickHandler}
                className={
                  chosenColor === "red"
                    ? "color-choosable_selected"
                    : "color-choosable"
                }
                id="red"
              ></div>
              <div
                onClick={colorClickHandler}
                className={
                  chosenColor === "brown"
                    ? "color-choosable_selected"
                    : "color-choosable"
                }
                id="brown"
              ></div>
              <div
                onClick={colorClickHandler}
                className={
                  chosenColor === "pink"
                    ? "color-choosable_selected"
                    : "color-choosable"
                }
                id="pink"
              ></div>
              <div
                onClick={colorClickHandler}
                className={
                  chosenColor === "blue"
                    ? "color-choosable_selected"
                    : "color-choosable"
                }
                id="blue"
              ></div>
            </div>
            <button className="new_game" onClick={drawnColors}>
              New Game
            </button>
            <NewGame
              open={newGameOpen}
              onClose={() => {
                setNewGameOpen(false);
              }}
            >
              <h3>New Game started! Good luck!</h3>
            </NewGame>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
