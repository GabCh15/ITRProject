import React, { Component } from "react";
import { getCryptos } from "../../services/CryptoService";

export default class CryptoListClassComponent extends Component {
  constructor() {
    super();
    this.state = { cryptos: []};
    this.retrieveCryptos = async () => this.setState({ cryptos: await getCryptos() });
  }

  componentDidMount() {
    this.retrieveCryptos();
  }

  render() {
    var cryptosHtmlList = [];
    this.state.cryptos.forEach((crypto) => {
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
      <h1>Class Component</h1>
        <button onClick={() => this.retrieveCryptos()}>
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
          <tbody>{cryptosHtmlList}</tbody>
        </table>
      </>
    );
  }
}
