import React, { useState, useReducer, useRef } from "react";
import WagerSelector from "../GenericComponents/WagerSelector";
import NumberUnit from "./MoneyTrainComponents/NumberUnit";
import GamePageHeader from "../GenericComponents/GamePageHeader";
import Modal from "../GenericComponents/BeginGameModal";
import CryptoMenuButton from "../GenericComponents/CryptoMenuButton";
import { Divider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import GameEndModal from "../GenericComponents/GameEndedModal";

//Required information to run the game
// 1) If the game has started, or if the user is still choosing a wager amount
// 2) The stage which the game is on. Could be the first stage, second stage, or third stage
// 3) The numbers which have been succesfully chosen, in order for the following stages to not include that number
// 4) The wager amount, may not be important for the actual game function however.

const ACTIONS = {
  BITCOIN: "Bitcoin",
  ETHEREUM: "Ethereum",
  SOLANA: "Solana",
  CARDANO: "Cardano",
  USDC: "USDC",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.BITCOIN:
      return { selectedCrypto: "Bitcoin", linkToIcon: "/bitcoin.png" };

    case ACTIONS.ETHEREUM:
      return { selectedCrypto: "Ethereum", linkToIcon: "/ethereum.png" };

    case ACTIONS.SOLANA:
      return { selectedCrypto: "Solana", linkToIcon: "/solana.png" };

    case ACTIONS.CARDANO:
      return { selectedCrypto: "Cardano", linkToIcon: "/cardano.png" };

    case ACTIONS.USDC:
      return { selectedCrypto: "USDC", linkToIcon: "/usdc.png" };

    default:
      return { ...state };
  }
};

const MoneyTrain = () => {
  const [beginGameModal, setBeginGameModal] = useState(false);
  const [wagerAmount, setWagerAmount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [cashOutValue, setCashOutValue] = useState(100);
  const [focusedNumberUnit, setFocusedNumberUnit] = useState(0);
  const [restartGameModal, setRestartGameModal] = useState(false);
  const [availableSelections, setAvailableSelections] = useState([1, 2, 3, 4]);
  const [state, dispatch] = useReducer(reducer, {
    selectedCrypto: "Ethereum",
    linkToIcon: `/ethereum.png`,
  });

  const revertUnit1 = useRef();
  const revertUnit2 = useRef();
  const revertUnit3 = useRef();

  //Function passed to the modal to begin the game
  const beginGame = (e) => {
    e.stopPropagation();
    setBeginGameModal(false);
    setGameStarted(true);
    moveToNextSelection();
  };

  const moveToNextSelection = () => {
    setFocusedNumberUnit((current) => current + 1);
  };

  const repeatGame = () => {
    setGameStarted(true);
    setFocusedNumberUnit(1);
    revertUnit1.current.reset();
    revertUnit2.current.reset();
    revertUnit3.current.reset();
    setAvailableSelections([1, 2, 3, 4]);
    setRestartGameModal(false);
  };

  const dontRepeatGame = () => {
    setGameStarted(false);
    setFocusedNumberUnit(0);
    revertUnit1.current.reset();
    revertUnit2.current.reset();
    revertUnit3.current.reset();
    setAvailableSelections([1, 2, 3, 4]);
    setRestartGameModal(false);
  };

  //Change the amount that the increase and decrease buttons change the wagerAmount buttons by when

  return (
    <>
      {beginGameModal && (
        <Modal
          heading={state.selectedCrypto}
          description={`Confirm that you want to wager ${wagerAmount} ${state.selectedCrypto} on MoneyTrain? `}
          beginGame={beginGame}
          setModal={setBeginGameModal}
        />
      )}

      {restartGameModal && (
        <GameEndModal
          heading={"Your game has ended"}
          description={`Would you like to repeat MoneyTrain with another ${wagerAmount} ${state.selectedCrypto} ?`}
          repeatGame={repeatGame}
          dontRepeatGame={dontRepeatGame}
        />
      )}

      <GamePageHeader gameStarted={gameStarted} cashOutValue={cashOutValue} />
      <div className="w-full flex flex-col lg:p-3">
        <AnimatePresence>
          {!gameStarted && (
            <WagerSelector
              CryptoMenuButton={
                <CryptoMenuButton
                  dispatch={dispatch}
                  ACTIONS={ACTIONS}
                  linkToIcon={state.linkToIcon}
                />
              }
              selectedCrypto={state.selectedCrypto}
              setWagerAmount={setWagerAmount}
              setModal={setBeginGameModal}
              wagerAmount={wagerAmount}
            />
          )}
        </AnimatePresence>
        <div className="flex justify-center flex-wrap">
          <NumberUnit
            position="1st"
            focused={focusedNumberUnit === 1 ? true : false}
            moveToNextSelection={moveToNextSelection}
            setRestartGameModal={setRestartGameModal}
            availableSelections={availableSelections}
            setAvailableSelections={setAvailableSelections}
            ref={revertUnit1}
          />
          <NumberUnit
            position="2nd"
            focused={focusedNumberUnit === 2 ? true : false}
            moveToNextSelection={moveToNextSelection}
            setRestartGameModal={setRestartGameModal}
            availableSelections={availableSelections}
            setAvailableSelections={setAvailableSelections}
            ref={revertUnit2}
          />
          <NumberUnit
            position="3rd"
            focused={focusedNumberUnit === 3 ? true : false}
            moveToNextSelection={moveToNextSelection}
            setRestartGameModal={setRestartGameModal}
            availableSelections={availableSelections}
            setAvailableSelections={setAvailableSelections}
            ref={revertUnit3}
          />
        </div>
      </div>
      <Divider
        color="#708090"
        sx={{ width: "98%", mx: "auto", mt: "0.5rem" }}
      />
      <div className="text-white p-4 md:p-6" id="money-train-description">
        <h1 className="font-bold text-[1.5rem]">Description</h1>
        <p>
          <span className="text-gold">Money Train.</span> A game that is sure to
          get your heart racing while still remaining a fun and casual pastime
          with the potential for major profit.
        </p>

        <ol className=" mt-1 p-4 md:p-6 list-decimal w-full text-sm md:text-md">
          <li className="">
            Choose your wager amount. We support a variety of the most popular
            cryptocurrencies. Need to deposit more?{" "}
            <a href="#" className="font-bold text-gold hover:underline">
              Click Here.
            </a>
            <div className="flex mt-5 flex-wrap">
              <img src="/bitcoin.png" alt="" className="w-[3rem] lg:mx-1" />
              <img src="/ethereum.png" alt="" className="w-[3rem] lg:mx-1" />
              <img src="/solana.png" alt="" className="w-[3rem] lg:mx-1" />
              <img src="/cardano.png" alt="" className="w-[3rem] lg:mx-1" />
              <img src="/usdc.png" alt="" className="w-[3rem] lg:mx-1" />
            </div>
          </li>
          <li className="mt-6">
            Money Train is made up of three rounds. You have 4 possible choices
            in the first round, 3 possible choices in the second round, and 2
            possible choices in the third round. In the first round, the
            possible choices are 1 through 4.
          </li>
          <li className="mt-6">
            Selecting the correct choice in a round will allow you to move onto
            the next round. The possible choices in the second round are 1
            through 4 except the correct selection from round 1. The possible
            choices for round three are 1 through 4 except the correct
            selections from rounds one and two. Your chances of winning increase
            the further you get!
          </li>
          <li className="mt-6">
            For example. If you correctly choose the number 4 in round one, your
            possible selections in round 2 are 1,2 and 3. If you correctly
            select the number 1 in round 2, your possible selections in round
            three are 2 and 3.
          </li>
          <li className="mt-6">
            Best of all, you can cash out at any stage to lock in your winnings.
          </li>
          <li className="mt-6">
            The further you go, the larger your payout! A complete train will
            yield a 21x return.
          </li>
        </ol>
      </div>
    </>
  );
};

export default MoneyTrain;
