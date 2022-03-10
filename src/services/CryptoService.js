import { cryptos } from "../model/CryptoDoomies";

export const getCryptos = () =>
  new Promise((resolve, reject) => {
    resolve(cryptos)
  });
