import React, { Component } from "react";
import { getCryptos } from "../../services/CryptoService";
import LoadingClassComponent from "../LoadingClassComponent";
import "../../view/cryptolist.css";

function ascii_to_hex(str) {
  var arr1 = [];
  for (var n = 0, l = str.length; n < l; n++) {
    var hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return arr1.join("");
}

export default class CryptoListClassComponent extends Component {
  constructor() {
    super();
    this.state = { cryptos: [], loading: false, text: "No Pasa" };
    this.retrieveCryptos = async () => {
      this.setState({ loading: true });
      this.setState({ cryptos: await getCryptos(), loading: false });
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.text === "No Pasa") {
      return false;
    }
    state.text = ascii_to_hex(state.text);
    return true;
  }

  shouldComponentUpdate(props, state) {
    if (state.text === "No Pasa") {
      return false;
    }
    state.text = ascii_to_hex(state.text);
    return true;
  }

  componentDidMount() {
    this.retrieveCryptos();
  }

  render() {
    console.log(this.state.text);
      return (
        <>
          <h1>Class Component</h1>
          <button
            onClick={() => this.retrieveCryptos()}
            className="updateButton"
          >
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
            <tbody>
              {!this.state.loading &&
                this.state.cryptos.map((crypto) => (
                  <tr key={crypto.symbol}>
                    <td>{crypto.name} </td>
                    <td>{crypto.symbol} </td>
                    <td>{crypto.usdPrice}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {this.state.loading && <LoadingClassComponent text="Loading Class..." />}
        </>)
  }
}
