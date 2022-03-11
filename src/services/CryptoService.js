import { cryptos } from "../model/CryptoDoomies";

export const getCryptos = () =>
  new Promise((resolve, reject) => {
    setTimeout(() =>resolve(cryptos),5000)
    
  });
