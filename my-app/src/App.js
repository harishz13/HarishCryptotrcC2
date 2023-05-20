import React from 'react';
import {useState,useEffect} from "react"
import './App.css';

const App= ()=> {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Crypto Tracker</h1>
      <table>
      <thead>
      </thead>
      <tbody>
        {data.map(item => (
          <>
          <tr key={item.id}>
            <td style={{padding: "10px"}}><img src={item.image} alt={item.name} height={48}/></td>
            <td style={{padding: "10px"}}>{item.name}</td>
            <td style={{padding: "10px"}}>{item.symbol}</td>
            <td style={{padding: "10px"}}>{item.current_price}</td>
            <td style={{padding: "10px"}}>{item.market_cap}</td>
            <td style={{padding: "10px"}}>{item.price_change_percentage_24h}</td>
            <td style={{padding: "10px"}}>{item.total_volume}</td>
          </tr>
          <tr><td colSpan="33" style={{borderTop: "1px solid white"}}></td></tr>
          </>
          
        ))}
      </tbody>
    </table>
    
    </div>
  );
}

export default App;
