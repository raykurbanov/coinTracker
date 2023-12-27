import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCryptoList = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.us/api/v3/ticker/price"
        );

        // Extract the cryptocurrency data from the response
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoList();
  }, []);
  return (
    <div className="App">
      <p>Price BTC: {data.find((el) => el.symbol === "BTCUSDT").price}</p>
      <p>Price ADA: {data.find((el) => el.symbol === "ADAUSDT").price}</p>
      <p>Price DOT: {data.find((el) => el.symbol === "DOTUSDT").price}</p>
      <p>Price VET: {data.find((el) => el.symbol === "VETUSDT").price}</p>
      <p>Price LINK: {data.find((el) => el.symbol === "LINKUSDT").price}</p>
    </div>
  );
}

export default App;
