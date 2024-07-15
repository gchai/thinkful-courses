import React from "react";
import "./Header.css";

/*
  TODO: Complete the header
*/

function Header({name="Unknown Name",birthday="Unknown birthday",imageSrc="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/f9c0c6f475a7d6d357f070e269501876-ple_profile_page.png",}) {
  return (
    <header>
      <img src={imageSrc} />
      <div>
        <h1>{name}</h1>
        <h2>{birthday}</h2>
      </div>
    </header>
  );
}

export default Header;
