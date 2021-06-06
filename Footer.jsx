import React from "react";

function Footer() {
  var curr_year = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright @ {curr_year}</p>
    </footer>
  );
}
export default Footer;
