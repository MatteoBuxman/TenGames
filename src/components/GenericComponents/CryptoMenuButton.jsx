import { Button } from "@mui/material";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";


  function CryptoMenuButton({ linkToIcon, dispatch, ACTIONS }) {

  const [anchorElement, setAnchorElement] = useState(null);

  const open = Boolean(anchorElement);

  const handleOpen = (e) => {
    setAnchorElement(e.currentTarget);
  };

  return (
    <div className="mr-7">
      <Button
        id="resources-button"
        color="text"
        variant="contained"
        onClick={handleOpen}
        aria-controls={open ? "resources-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
        sx={{ width: "30%" }}
      >
        <img src={linkToIcon} alt="Icon Link" className="w-[1.4rem]"/>
      </Button>

      <Menu
        id="resources-menu"
        anchorEl={anchorElement}
        open={open}
        MenuListProps={{
          "aria-labelledby": "resources-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setAnchorElement(null);
            dispatch({ type: ACTIONS.BITCOIN });
          }}
        >
          <ListItemIcon>
            <img src="/bitcoin.png" className="w-[1.2rem]"></img>
          </ListItemIcon>
          <ListItemText>Bitcoin</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorElement(null);
            dispatch({ type: ACTIONS.ETHEREUM });
          }}
        >
          <ListItemIcon>
            <img src="/ethereum.png" className="w-[1.2rem]"></img>
          </ListItemIcon>
          <ListItemText>Ethereum</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorElement(null);
            dispatch({ type: ACTIONS.SOLANA });
          }}
        >
          <ListItemIcon>
            <img src="/solana.png" className="w-[1.2rem]"></img>
          </ListItemIcon>
          <ListItemText>Solana</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorElement(null);
            dispatch({ type: ACTIONS.CARDANO });
          }}
        >
          <ListItemIcon>
            <img src="/cardano.png" className="w-[1.2rem]"></img>
          </ListItemIcon>
          <ListItemText>Cardano</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorElement(null);
            dispatch({ type: ACTIONS.USDC });
          }}
        >
          <ListItemIcon>
            <img src="/usdc.png" className="w-[1.2rem]"></img>
          </ListItemIcon>
          <ListItemText>USDC</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default CryptoMenuButton;