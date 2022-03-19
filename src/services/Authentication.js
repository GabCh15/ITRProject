import Web3 from "web3";

window.userAddress = null;
window.role = null;
export const setUserAddress = () => {
  window.userAddress = window.localStorage.getItem("userAddress");
  window.role = getRole(window.userAddress);
};

export const unSetUserAddress = () => {
  window.userAddress = null;
  window.localStorage.removeItem("userAddress");
  window.role = getRole(window.userAddress);
};

export const loginFunction = async (isLogged) => {
  if (!isLogged && window.web3) {
    window.web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      var accounts = await window.web3.eth.getAccounts();
      window.localStorage.setItem("userAddress", accounts[0]);
      setUserAddress();
    } catch (e) {
      return false;
    }
    return true;
  } else {
    return true;
  }
};

export const logOutFunction = () => {
  unSetUserAddress();
  return false;
};

export const getRole = (userAddress) => {
  if (userAddress === null) return "none";
  if (
    userAddress != null &&
    userAddress.toLowerCase() ===
      "0x3916AA950d10e30Afd9b0741921eB8705b63702f".toLowerCase()
  )
    return "admin";
  return "user";
};
