import React, { useEffect, useState } from "react";
import { getCryptos } from "../../services/CryptoService";
import { LoadingFunctionalComponent } from "../LoadingFunctionalComponent";
import "../../view/cryptolist.css";

export const CryptoListFunctionalComponent = () => {
  var [filter, setFilter] = useState("");
  var [cryptos, setCryptos] = useState(null);
  var [loading, setLoading] = useState(false);

  var retrieveCryptos = async (filter) => {
    setLoading(true);
    setCryptos(await getCryptos(filter));
    setLoading(false);
  };
  var isLoading = () => "Is Loading: " + loading;
  var updatingCryptos = (isUpdating) => "Is Loading: " + isUpdating;

  useEffect(() => {
    retrieveCryptos(filter);
  }, []);

  return (
    <div className="w-75">
      <h1>Crypto Currencies List</h1>
      <div className="d-flex mt-5">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Type a crypto currency name..."
          aria-label="Search"
          vale={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            retrieveCryptos(e.target.value);
          }}
        />
        <button className="btn btn-outline-light btn-outline-light-search">
          Search
        </button>
      </div>

      <div className="rounded mt-5" style={{ overflow: "hidden" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>USD Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              cryptos &&
              cryptos.map((crypto) => <CryptoItem crypto={crypto} key={crypto.symbol} />)}
          </tbody>
        </table>
      </div>
      {loading && <LoadingFunctionalComponent text="Loading Cryptos..." />}
      <div className="d-flex justify-content-end">
        <button
          onClick={() => retrieveCryptos(filter)}
          className="btn btn-danger mb-2 mt-5"
        >
          Update List
        </button>
      </div>
    </div>
  );
};

export var CryptoItem = (props) => {
  var [isHidden, setIsHidden] = useState(true);
  var { crypto } = props;
  return (
    <>
      <tr role="button" onClick={() => setIsHidden(!isHidden)}>
        <td>{crypto.name} </td>
        <td>{crypto.symbol} </td>
        <td>{crypto.usdPrice}</td>
        <td>
          {(!isHidden && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          )) || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          )}
        </td>
      </tr>

      {!isHidden && (
        <tr>
          <td colSpan="6">
            <div>{crypto.description}</div>
          </td>
        </tr>
      )}
    </>
  );
};
