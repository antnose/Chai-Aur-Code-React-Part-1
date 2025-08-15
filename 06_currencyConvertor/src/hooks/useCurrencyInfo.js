import { useEffect, useState } from "react";

function useCurrencyInfo({ currency = "usd" }) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/3f63a0b1c4618926e5d3729d/latest/${currency}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [currency]);
  // console.log(data);
  return data;
}
export default useCurrencyInfo;
