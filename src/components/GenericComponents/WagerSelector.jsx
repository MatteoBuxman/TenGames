import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import CurrencyInput from "react-currency-input-field";


export const beginGameVariant = {
  beginGame:{
    y: "-50vh",
    transition:{
      duration: 0.6,
    }
  }
}

function WagerSelector({
  CryptoMenuButton,
  selectedCrypto,
  setModal,
  wagerAmount,
  setWagerAmount,
}) {
  return (
      <motion.div variants={beginGameVariant} exit="beginGame" className="w-full flex justify-center items-center">
        <div className="w-[95%] mt-3 md:w-[70%] lg:w-[70%] max-w-[450px] rounded-xl flex flex-col items-center bg-primary">
          <div className="flex justify-between mt-3 w-full items-center mx-auto">
            <h2 className="text-white font-semibold text-lg ml-7">
              Wager Amount
            </h2>
            {CryptoMenuButton}
          </div>
          <div className="flex bg-primary p-5 rounded-lg">
            <div className="mx-auto flex items-center">
              <CurrencyInput
                className="h-[32.5px] p-2 rounded-lg text-white bg-secondary focus:outline-none "
                name="wager-amount"
                placeholder={`Amount of ${selectedCrypto}`}
                decimalsLimit={5}
                value={wagerAmount}
                onValueChange={(value) => setWagerAmount(value)}
              />
              <h1 className="text-white ml-4 rounded-lg p-1">$0.00</h1>
            </div>
          </div>
          <Button
            variant="contained"
            color="button"
            sx={{
              width: "60%",
              color: "#FFFFFF",
              p: "5px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              mb: "1.5rem",
              zIndex:"0"
            }}
            onClick={() => setModal(true)}
          >
            Start
          </Button>
        </div>
      </motion.div>
  )}

export default WagerSelector;
