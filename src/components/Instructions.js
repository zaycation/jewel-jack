import React from "react";

const Instructions = () => {
  return (
    <>
      <h4 className="py-5">Instructions</h4>
      <ol>
        <li>
          The bottom green bar is the target score aka the "dealer's hand".
        </li>
        <li>
          The goal is to choose the correct combination of jewels to perfectly
          match the dealer's hand. There is also a stats card to show you the
          corresponding digits.
        </li>
        <li>
          The value of the jewels may or may not change values. Choose carefully
          to ensure you match the dealer's hand!
        </li>
      </ol>
    </>
  );
};

export default Instructions;
