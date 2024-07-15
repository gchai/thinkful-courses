import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeIncrease }) {
  return (
    <div>
    <button onClick={handleLoggedInClick}>{loggedIn? "Log Out":"Log In"}</button>
    <button onClick={handleFontSizeIncrease}>Increase Font size</button>
    </div>
  );
}

export default Header;
