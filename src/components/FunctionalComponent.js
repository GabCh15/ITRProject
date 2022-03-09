import React, { useEffect, useState } from "react";

var getValue = () => {
  return new Promise((resolve, reject) => {
    resolve("Sucess promise functional");
  });
};

export function FunctionalComponent() {
  var [promise, setPromise] = useState(null);

  useEffect( ()  => {
    (async () => setPromise(await getValue()))()
  });

  return <div>{"Functional Component:" + promise}</div>;
}
