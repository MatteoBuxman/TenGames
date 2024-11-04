import React from "react";
import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Button } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import Confetti from "react-confetti";
import useScreen from "../../Hooks/useScreen";

function NumberUnit(
  {
    position,
    focused,
    moveToNextSelection,
    setRestartGameModal,
    availableSelections,
    setAvailableSelections,
  },
  ref
) {
  const [selection, setSelection] = useState(availableSelections[0]);

  useEffect(() => {
    if (!hasRun) {
      setSelection(availableSelections[0]);
    }
  }, [availableSelections]);

  const [random, setRandom] = useState(undefined);
  const [hasRun, setHasRun] = useState(false);
  const [hasWon, setHasWon] = useState(undefined);
  const [confetti, setConfetti] = useState(false);

  const { width, height } = useScreen();

  useImperativeHandle(ref, () => ({
    reset() {
      setSelection(1);
      setRandom(undefined);
      setHasRun(false);
      setHasWon(undefined);
    },
  }));

  const controls = useAnimationControls();

  const variant = {
    bulge: {
      scale: [0.7, 1.3, 0.7, 1],
      transition: {
        duration: 0.6,
      },
    },
  };

  //Only allow the selection to be between 0 or 4, and "jumps" over options that have already been selected correctly in previous rounds
  const handleChange = (action) => {
    switch (action) {
      case 1:
        if (!(selection === 4) && availableSelections.includes(selection + 1)) {
          setSelection((selection) => selection + 1);
        } else if (availableSelections.includes(selection + 2)) {
          setSelection((selection) => selection + 2);
        } else if (availableSelections.includes(selection + 3)) {
          setSelection((selection) => selection + 3);
        }
        break;
      case -1:
        if (!(selection === 1) && availableSelections.includes(selection - 1)) {
          setSelection((selection) => selection - 1);
        } else if (availableSelections.includes(selection - 2)) {
          setSelection((selection) => selection - 2);
        } else if (availableSelections.includes(selection - 3)) {
          setSelection((selection) => selection - 3);
        }
        break;
      default:
        setSelection(selection => selection);
    }
  };

  const selectNumber = (e) => {
    setHasRun(true);
    e.stopPropagation();

    const amountOfCycles = 12;
    let counter = 0;

    const intervalID = setInterval(() => {
      const randomIndex = Math.floor(
        Math.random() * availableSelections.length
      );
      const randomSelection = availableSelections[randomIndex];

      if (counter === amountOfCycles) {
        controls.start("bulge");
        setRandom(randomSelection);
        clearInterval(intervalID);
        setHasRun(true);
        if (selection === randomSelection) {
          setHasWon(true);
          setConfetti(true);
          setTimeout(() => setConfetti(false), 8000);
          //Remove the correctly selected value from the array of available selections
          const revisedAvailableSelections = availableSelections.filter(
            (selection) => selection !== randomSelection
          );
          setAvailableSelections(revisedAvailableSelections);

          moveToNextSelection();
        } else {
          setHasWon(false);
          setTimeout(() => setRestartGameModal(true), 800);
        }
      } else {
        controls.start("bulge");
        setRandom(randomSelection);
        counter++;
      }
    }, 750);
  };

  return (
    <>
      {confetti && (
        <div className="z-50">
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={1000}
        />
        </div>
      )}
      <div
        className={`flex flex-col items-center bg-primary rounded-xl px-3 py-8 m-4 w-full lg:w-[80%] max-w-[400px] ${
          typeof hasWon === "undefined"
            ? "border-none"
            : hasWon
            ? "outline outline-success outline-6"
            : "outline outline-danger outline-6"
        }`}
      >
        <h1 className="text-white font-bold mb-2 text-[1rem]">
          {position} round
        </h1>

        <div className=" flex justify-center items-center w-[80%]">
          <Button
            variant="contained"
            color="button"
            disabled={hasRun || !focused}
            sx={{
              width: "15%",
              color: "#FFFFFF",
              fontSize: "1.2rem",
              p: "0px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              height: "60px",
            }}
            onClick={() => handleChange(1)}
          >
            +
          </Button>
          <div className=" flex items-center justify-center w-[50%] bg-secondary">
            <h1 className="text-white text-[2.5rem] px-4 ">
              {focused || hasRun ? selection : "?"}
            </h1>
          </div>
          <Button
            variant="contained"
            color="button"
            disabled={hasRun || !focused}
            sx={{
              width: "15%",
              color: "#FFFFFF",
              fontSize: "1.2rem",
              p: "0px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              height: "60px",
            }}
            onClick={() => handleChange(-1)}
          >
            —
          </Button>
        </div>
        <motion.h1
          animate={controls}
          variants={variant}
          className={`${
            typeof hasWon === "undefined"
              ? "text-white"
              : hasWon
              ? "text-success"
              : "text-danger"
          } text-[5.5rem]`}
        >
          {Boolean(random) ? random : "?"}
        </motion.h1>
        {typeof hasWon === "undefined" && (
          <Button
            variant="contained"
            color="button"
            disabled={hasRun || !focused}
            sx={{
              width: "60%",
              color: "#FFFFFF",
              p: "5px",
              mx: "auto",
              fontWeight: "bold",
            }}
            onClick={selectNumber}
          >
            Select
          </Button>
        )}
        {!(typeof hasWon === "undefined") &&
          (hasWon ? (
            <h1 className="text-white bg-success text-[1rem] font-bold p-2 rounded-lg mb-2">
              Well Done!
            </h1>
          ) : (
            <h1 className="text-white bg-danger text-[1rem] font-bold p-2 rounded-lg mb-2">
              Better luck next time!
            </h1>
          ))}
      </div>
    </>
  );
}

NumberUnit = forwardRef(NumberUnit);

export default NumberUnit;
