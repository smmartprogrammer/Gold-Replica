import React from 'react';
import '../Stylesheet/PriceComponent.css';

const PriceComponent = () => {
  return (
    <div className="priceMain">
      <div className="priceMain_first">
        <div className="queries">
          <div className="heading">Price Options </div>
          <div className="fieldArea">
            <input
              className="number"
              type="number"
              placeholder="Please enter the Price"
              required
            />
            <input
              className="number"
              type="number"
              placeholder="Please enter the weights in grams"
              required
            />
            <br />
            <button className="btn">900 Coin</button>
            <button className="btn">750 Gold</button>
            <button className="btn">585 Gold</button>
            <button className="btn">333 Gold</button>
            <br />
            <button type="submit" className="btn">
              Submit
            </button>
            <br />
          </div>
        </div>
        <div className="resultDisplayer">
          <div className="heading">Price of 900 coins</div>
          {/* <div className="headingdisplayeroutput"> */}
          {/* </div> */}
          <div className="resultOutput">
            <div className="exactResult">512</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;
