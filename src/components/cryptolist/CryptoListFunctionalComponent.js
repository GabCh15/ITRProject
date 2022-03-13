import React, { useEffect, useState } from "react";
import { getCryptos } from "../../services/CryptoService";
import { LoadingFunctionalComponent } from "../LoadingFunctionalComponent";
import "../../view/cryptolist.css";

export const CryptoListFunctionalComponent = () => {
  var [cryptos, setCryptos] = useState(null);
  var [loading, setLoading] = useState(false);
  var retrieveCryptos = async () => {
    setLoading(true);
    setCryptos(await getCryptos());
    setLoading(false);
  };
  useEffect(() => {
    if (!cryptos) retrieveCryptos();
  });

  var cryptosHtmlList = [];
  if (cryptos) {
    cryptos.map((crypto) => {
      cryptosHtmlList.push(
        <tr key={crypto.symbol}>
          <td>{crypto.name} </td>
          <td>{crypto.symbol} </td>
          <td>{crypto.usdPrice}</td>
        </tr>
      );
    });
  }
  return (
    <>
      <h1>Functional component</h1>
      <button onClick={() => retrieveCryptos()} className="updateButton">
        Actualizar
      </button>
      <table style={{ width: "25%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>USD Price</th>
          </tr>
        </thead>
        <tbody>{!loading && cryptosHtmlList}</tbody>
      </table>
      {loading && <LoadingFunctionalComponent text="Loading Functional..." />}
    </>
  );
};
