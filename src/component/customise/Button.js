import Button from "materialize-css";
import React from "react";

export default function Buttons(props) {
    const {contant,onClick}  =props 
 return (
    <div>
      <button class="btn waves-effect waves-light " type="submit" name="action" onClick={onClick} >
         {contant}
        {/* <i class="material-icons right">send</i> */}
      </button>
    </div>
  );
}
