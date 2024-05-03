import React, { useEffect, useState } from "react"
import { Block } from "./Block"
import "./index.scss"

function App() {
  const rates = {
    USD: 1,
    RUB: 93.13,
    EUR: 0.93,
    GBP: 0.8,
  }
  const [fromCurrency, setFromCurrency] = useState("RUB")
  const [toCurrency, setToCurrency] = useState("USD")
  const [fromCurrencyValue, setFromCurrencyValue] = useState(0)
  const [toCurrencyValue, setToCurrencyValue] = useState(1)

  function onChangeFromCurrency(value) {
    const price = value / rates[fromCurrency]
    const result = price * rates[toCurrency]
    setFromCurrencyValue(value)
    setToCurrencyValue(result.toFixed(2))
  }

  function onChangeToCurrency(value) {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value
    setToCurrencyValue(value)
    setFromCurrencyValue(result.toFixed(2))
  }

  useEffect(() => {
    onChangeFromCurrency(fromCurrencyValue)
  }, [fromCurrency])

  useEffect(() => {
    onChangeToCurrency(toCurrencyValue)
  }, [toCurrency])

  return (
    <div className="App">
      <Block
        value={fromCurrencyValue}
        currency={fromCurrency}
        onChangeCurrency={(cur) => setFromCurrency(cur)}
        onChangeValue={onChangeFromCurrency}
      />
      <Block
        value={toCurrencyValue}
        currency={toCurrency}
        onChangeCurrency={(cur) => setToCurrency(cur)}
        onChangeValue={onChangeToCurrency}
      />
    </div>
  )
}

export default App
