import React from "react";
import { Button, Divider } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";

const beginGame = {
  beginGame: {
    scale: [0, 1],
    transition: {
      duration: 0.7,
    },
  },
};

function GamePageHeader({ gameStarted, cashOutValue }) {
  return (
    <section className="sticky pt-2 md:pt-[1px] top-0 bg-secondary z-10">
      <div className="flex justify-between items-center px-3 ml-3 md:ml-7 md:mt-4">
        <div className="flex items-center text-md lg:text-2xl my-auto">
          <h1 className="text-white font-bold ">Money Train</h1>
          <Button>
            <a href="#money-train-description">
              <InfoIcon sx={{ color: "#FFD700" }} />
            </a>
          </Button>
        </div>

        {gameStarted && (
          <motion.div
            variants={beginGame}
            animate="beginGame"
            className="flex items-center text-white p-1 md:p-3 rounded-xl md:bg-primary"
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                color: "#FFFFFF",
                fontSize: "0.8rem",
                px: "5px",
                py: "2px",
              }}
            >
              Cash Out
            </Button>
            <h1 className="ml-2 md:ml-5">$ {cashOutValue}</h1>
          </motion.div>
        )}

        <h2 className="text-white p-2 bg-secondary rounded mr-6 hidden md:block" >
          Wallet Value: $ 5678.98
        </h2>
        
      </div>
      <Divider
        color="#708090"
        sx={{ width: "98%", mx: "auto", mt: "0.5rem" }}
      />
    </section>
  );
}

export default GamePageHeader;
