import React from "react";
import Flip from "react-reveal/Flip";

import HomeNav from "../components/HomeNav";

const DoantePage = () => {
  return (
    <>
      <HomeNav />
      <Flip bottom>
        <div className="py-5 text-center donatebg">
          <h3>Bitcoin Donation Address</h3>
          <h2>17zrWBqxGQYNDNzJ1GQKcAbNH27cKBZ4BW</h2>
          <p>All donations are welcome!</p>
          <p>😝</p>
          <p className="donation-rzn">
            <strong>Please donate so that we can afford to buy a domain</strong>
          </p>
        </div>
      </Flip>
    </>
  );
};

export default DoantePage;
