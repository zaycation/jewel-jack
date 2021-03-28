import React from "react";

const DoantePage = () => {
  return (
    <>
      <div
        style={{ fontsize: "16px", margin: "0", width: "300px" }}
        className="blockchain-btn"
        data-address="17zrWBqxGQYNDNzJ1GQKcAbNH27cKBZ4BW"
        data-shared="false"
      >
        <div className="blockchain stage-begin">
          <img
            alt="donatebtn"
            src="https://blockchain.info/Resources/buttons/donate_64.png"
          />
        </div>
        <div className="blockchain stage-loading text-center">
          <img
            alt="loading"
            src="https://blockchain.info/Resources/loading-large.gif"
          />
        </div>
        <div className="blockchain stage-ready">
          <p align="center">
            Please Donate To Bitcoin Address: <b>[[address]]</b>
          </p>
          <p align="center" class="qr-code"></p>
        </div>
        <div className="blockchain stage-paid">
          Donation of <b>[[value]] BTC</b> Received. Thank You.
        </div>
        <div className="blockchain stage-error">
          <font color="red">[[error]]</font>
        </div>
      </div>
    </>
  );
};

export default DoantePage;
