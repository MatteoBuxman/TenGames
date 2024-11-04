import React, { useEffect, useState } from "react";
import { Divider, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { InputAdornment } from "@mui/material";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CabinIcon from "@mui/icons-material/Cabin";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Chip } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import recentWinners from "../../JSON/recentWinners.json";

function Navigation({ children }) {
  const [nav, setNav] = useState(false);

  //Attach the event listener which will hide the navbar if the screen width becomes too large and the UI shifts to the large screen UI
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative ">
      <nav className="flex content-between bg-primary rounded-lg w-[99%] mx-auto lg:mt-2 max-w-[1800px] z-30">
        <div className="flex items-center justify-between w-full lg:justify-start ml-5 lg:max-w-[800px] lg:py-1">
          <button
            className="lg:hidden text-white font-bold cursor-pointer"
            onClick={() => setNav((nav) => !nav)}
          >
            {nav ? "Close" : "Menu"}
          </button>
          <img src="/tengames.png" alt="Logo Image" className="h-[35%]" />
          <div className="hidden lg:block w-[50%]">
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#708090" }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: "#708090" }, shrink: true }}
              color="text"
              label="Search Games"
              size="small"
              sx={{
                backgroundColor: "#0f1032",
                borderRadius: "10px",
                width: "100%",
                marginLeft: "100px",
                input: { color: "text.main" },
              }}
            />
          </div>
          <div className="lg:hidden">
            <Button>
              <AccountCircleIcon fontSize="medium" sx={{ color: "#708090" }} />
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex justify-end items-center w-[60%] min-w-[700px]">
          <h2 className="text-[#708090] mr-5 p-2 bg-secondary rounded">
            BTC $16 786.26
          </h2>
          <h2 className="text-[#708090] p-2 bg-secondary rounded">
            ETH $1 267.32
          </h2>
          <img
            className="h-[20px] mx-7"
            src="/united-states.png"
            alt="Location Icon"
          />
          <Button>
            <NotificationsNoneIcon
              fontSize="medium"
              sx={{ color: "#708090" }}
            />
          </Button>
          <Button>
            <AccountCircleIcon fontSize="medium" sx={{ color: "#708090" }} />
          </Button>
        </div>
      </nav>
      <Divider
        color="#708090"
        sx={{ width: "96%", mx: "auto", maxWidth: "1810px" }}
      />
      <div className="flex w-[99%] mx-auto mt-3 max-w-[1800px] relative">
        <div
          className={`w-full min-w-[235px] lg:w-[17%] h-screen overflow-y-scroll z-50 md:z-0 ${
            nav ? "block absolute top-0 left-0 bottom-0 bg-primary" : "hidden"
          } p-6 lg:p-0 lg:block `}
        >
          <section className="flex flex-col lg:hidden mb-6 lg:ml-6">
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#708090" }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: "#708090" }, shrink: true }}
              color="text"
              label="Search Games"
              size="small"
              sx={{
                backgroundColor: "#0f1032",
                borderRadius: "10px",
                width: "100%",
                input: { color: "text.main" },
              }}
            />
          </section>
          <section className="flex flex-col lg:ml-6">
            <h2 className="text-text font-bold mb-4">Navigation</h2>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "100%", color: "#5348A9" }}
              startIcon={<CabinIcon sx={{ color: "#5348A9" }} />}
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "100%", color: "#DED4DB", mt: "22px" }}
              startIcon={<AccountBalanceWalletIcon sx={{ color: "#708090" }} />}
            >
              Wallet
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "100%", color: "#DED4DB", mt: "22px" }}
              startIcon={<AttachMoneyIcon sx={{ color: "#708090" }} />}
            >
              Deposit
            </Button>
          </section>
          <section className="flex flex-col lg:ml-6 mt-7">
            <div className="w-full bg-secondary p-3 rounded-lg">
              <div className="flex justify-between">
                <h2 className="text-text font-bold mb-4">Most Popular</h2>
                <AutoGraphIcon sx={{ color: "#AD3E36" }} />
              </div>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%", color: "#DED4DB", fontWeight: "bold" }}
              >
                Money Train
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  color: "#DED4DB",
                  mt: "12px",
                  fontWeight: "bold",
                }}
              >
                Shoot Your Shot
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  color: "#DED4DB",
                  mt: "12px",
                  fontWeight: "bold",
                }}
              >
                Lucky To Be Alive
              </Button>
            </div>
          </section>
          <section className="flex flex-col lg:ml-6 mt-7">
            <div className="w-full bg-secondary p-3 rounded-lg">
              <div className="flex justify-between">
                <h2 className="text-text font-bold mb-4">Recent Winners</h2>
                <EmojiEventsIcon sx={{ color: "#FFD700" }} />
              </div>

              {recentWinners.map(({ index, game, crypto, winAmount }) => (
                <div className="flex justify-between w-full mt-3 flex-wrap" key={index}>
                  <Chip
                    avatar={<img src={`/${crypto}.png`}></img>}
                    label={winAmount + " " + game}
                    variant="contained"
                    color="success"
                  />
                  
                </div>
              ))}

              
            </div>
          </section>
        </div>

        {/* Div where the actual game goes, the navigation UI is made up of everything else*/}
        <section
          id="gameRoot"
          className="lg:w-[80%] w-full mx-1 lg:mx-4 rounded h-screen overflow-y-scroll bg-secondary"
        >
          {children}
        </section>
      </div>
    </div>
  );
}

export default Navigation;
