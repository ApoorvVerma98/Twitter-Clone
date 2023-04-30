import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import style from "./pupup.module.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoggedSlice } from "../storeComponent/reducer";

const PopOver = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  function Loggedout() {
  
    dispatch(LoggedSlice.actions.isLogged({
   }));

   localStorage.setItem('auth',null);
   navigate('/signIn')
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={style.btn} {...bindTrigger(popupState)}>
            <img
              src="https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
              alt=""
              className={style.photo}
            />
            Chand babu <MoreHorizOutlinedIcon />
          </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2, cursor: "pointer" }}>
              Add an existing account
            </Typography>
            <Typography sx={{ p: 2, cursor: "pointer" }} onClick={Loggedout}>
              Log out{" "}
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default PopOver;
