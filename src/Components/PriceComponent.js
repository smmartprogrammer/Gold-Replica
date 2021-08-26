import React, { useState, useEffect } from 'react';
import '../Stylesheet/PriceComponent.css';

const PriceComponent = () => {
  const [price, setPrice] = useState(0);
  const [gram, setGram] = useState(0);
  const [nineHunderdCoins, setNineHundredCoins] = useState(900);
  const [sevenFiftyGold, setSevenFiftyGold] = useState(750);
  const [fiveEightyFiveGold, setFiveEightyFiveGold] = useState(585);
  const [threeHundredThirtyThreeGold, setThreeHundredThirtyThreeGold] =
    useState(333);
  const [currentOption, setCurrentOption] = useState();
  const [inputedGoldPrice, setInputedGoldPrice] = useState(0);
  const [active, setActive] = useState(0);
  const [newGram, setNewGram] = useState();
  const [newValue, setNewValue] = useState(0);

  const priceHandling = (e) => {
    setPrice(e.target.value);
  };

  const gramWeightHandling = (e) => {
    setGram(e.target.value);
    console.log(gram);
  };

  const handleSubmit = () => {
    setInputedGoldPrice(price);
    setCurrentOption(gram);
    setActive(currentOption);
  };

  const firstbtn = () => {
    setCurrentOption(nineHunderdCoins);
  };
  const secondBtn = () => {
    setCurrentOption(sevenFiftyGold);
  };

  const thirdBtn = () => {
    setCurrentOption(fiveEightyFiveGold);
  };

  const fourthBtn = () => {
    setCurrentOption(threeHundredThirtyThreeGold);
  };

  useEffect(async () => {
    const response = await fetch(
      'https://metals-api.com/api/latest?access_key=88mblef0aaiiuj5zmafdtinn9yvy76cgb49ri64116dx08pnf0xibw6axp5b',
    );
    console.log('response =', response);

    const data = await response.json();
    console.log('Data', data);
  });

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
              // value={value}
              onChange={priceHandling}
            />

            <input
              className="number"
              type="number"
              placeholder="Please enter the weights in grams"
              onChange={gramWeightHandling}
              // onChange={(e) => (e.target.value)}
            />
            <br />
            <button className="btn" onClick={firstbtn}>
              900 Coin
            </button>
            <button className="btn" onClick={secondBtn}>
              750 Gold
            </button>
            <button className="btn" onClick={thirdBtn}>
              585 Gold
            </button>
            <button className="btn" onClick={fourthBtn}>
              333 Gold
            </button>
            <br />
            <button type="submit" onClick={handleSubmit} className="btn">
              Submit
            </button>
            <br />
          </div>
        </div>
        <div className="resultDisplayer">
          <div className="heading goldRatesecondHeading ">
            Jewelry Gold: €{inputedGoldPrice}
            <br />
            <h3 className="secondPriceHeading">Price of {active} gram</h3>
          </div>
          <div className="resultOutput">
            <div className="exactResult">
              {(inputedGoldPrice / 1000) * active}€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;
