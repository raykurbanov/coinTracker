import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataset, setData] = useState([]);
  useEffect(() => {
    const fetchCryptoList = async () => {
      try {
        const response = await axios.get(
          "https://api.coinlore.net/api/tickers/?start=0&limit=100"
        );

        // Extract the cryptocurrency data from the response
        // console.log(response.data);

        console.log(response);
        console.log(response.data);
        console.log(response.data["data"]);
        setData(response.data["data"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoList();
  }, []);
  return (
    <div className="App">
      <h2>Prices:</h2>
      <ul>
        {dataset.map((el, idx) => {
          console.log(el);
          return (
            <li key={idx}>
              {el.name}: {el.price_usd}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
