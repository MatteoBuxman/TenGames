import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Modal({ heading, description, beginGame, setModal }) {

  return (
    <motion.div
      initial={{scale: "0%"}}
      animate={{scale:"100%"}}
      transition={{duration: 0.1}}
      className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-secondary bg-opacity-90 overflow-hidden transition-transform z-40"
      onClick={() => setModal(false)}
    >
      <div className=" w-[90%] md:w-[40%] text-center bg-primary rounded-xl flex flex-col items-center p-7">
        <h1 className="text-white my-2 font-bold">
          {heading}
        </h1>
        <h2 className="text-white ">
          {description}
        </h2>
        <Button
          variant="contained"
          color="button"
          sx={{
            width: "60%",
            color: "#FFFFFF",
            p: "5px",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            mt:"1.5rem",
          }}
          onClick={beginGame}
        >
          Confirm
        </Button>
      </div>
    </motion.div>
  );
}
