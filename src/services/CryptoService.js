import { cryptos } from "../model/CryptoDoomies";

export const getCryptos = (filter) => {
  var filteredCryptos = [];
  cryptos.forEach((crypto) =>
    crypto.name.toLowerCase().includes(filter.toLowerCase()) ? filteredCryptos.push(crypto) : null
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(filteredCryptos), 2000);
  });
};
