import React, { useEffect } from "react";
import {Avatar} from "@material-tailwind/react";

const logo = 'taiji.svg';
export default function header({}) {
  return (
    <div className="className">
      <header className="className grid justify-items-stretch">
        <Avatar className="justify-self-end hover:bg-current mt-4" src={logo}/>
      </header>
    </div>

  );
}
