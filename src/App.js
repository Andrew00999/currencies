import { useState } from 'react';
import './App.scss';
import Currency from './components/currency';
import Header from './components/header';

function App() {
  const [dataCurrencyUSD, setDataCurrencyUSD] = useState('');
  const [dataCurrencyEUR, setDataCurrencyEUR] = useState('');

  const dataCurrencyUSDFunc = (value) => {
    setDataCurrencyUSD(value)
  }

  const dataCurrencyEURFunc = (value) => {
    setDataCurrencyEUR(value)
  }

  return (
    <div className="App">
      <div className="centerModal"> 
        <Header
          dataCurrencyUSD={dataCurrencyUSDFunc}
          dataCurrencyEUR={dataCurrencyEURFunc}
        />
        <Currency currencies={[
          { name: 'UAH', rate: 1 },
          { name: 'USD', rate: dataCurrencyUSD },
          { name: 'EUR', rate: dataCurrencyEUR },
        ]} />
      </div>
    </div>
  );
}

export default App;
