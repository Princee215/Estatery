import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Entry(props) {
  return (
    <div className="term">
      <img src={props.img} alt="House"></img>
      <div className="entry">
        <h5 className="rate">
          ${props.rate}
          <span className="month">/month</span>
          <FavoriteBorderIcon className="heart" />
        </h5>
        <h5 className="property">{props.name}</h5>
        <p>{props.place}</p>
        <hr />
        <div className="info">
          <BedIcon className="icon" />
          <span className="room">{props.rooms}</span>
          <BathtubIcon className="icon" />
          <span className="room">{props.bathrooms}</span>
          <AspectRatioIcon className="icon" />
          <span className="room">{props.area}</span>
        </div>
      </div>
    </div>
  );
}

export default Entry;
