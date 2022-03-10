import React, { useEffect, useState } from "react";
import { getCryptos } from "../../services/CryptoService";

export const CryptoListFunctionalComponent = () => {
  var [cryptos,setCryptos] = useState([])
  var retrieveCryptos = async () => setCryptos(await getCryptos());
  useEffect(() => {
    retrieveCryptos()
  })
  

  var cryptosHtmlList = [];
  cryptos.forEach((crypto) => {
    cryptosHtmlList.push(
      <tr key={crypto.symbol}>
        <td>{crypto.name} </td>
        <td>{crypto.symbol} </td>
        <td>{crypto.usdPrice}</td>
      </tr>
    );
  });
  return (
    <>
    <h1>Functional component</h1>
      <button onClick={() => retrieveCryptos()}>Actualizar</button>
      <table style={{ width: "25%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>USD Price</th>
          </tr>
        </thead>
        <tbody>{cryptosHtmlList}</tbody>
      </table>
    </>
  );
};
