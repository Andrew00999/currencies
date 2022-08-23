import React, { useState, useEffect } from 'react';
import cl from './header.module.scss';

export const Header = ({ dataCurrencyUSD, dataCurrencyEUR }) => {
    const [USDState, setUSDState] = useState();
    const [EURState, setEURState] = useState();
    const [USDText, setUSDText] = useState();
    const [EURText, setEURText] = useState();
    let USD = 'USD';
    let EUR = 'EUR';

    dataCurrencyUSD(USDState);
    dataCurrencyEUR(EURState);

    useEffect(() => {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then(res => res.json())
            .then(
                (result) => {
                    const dollarRes = result.find(cur => cur.cc === USD);
                    const euroRes = result.find(cur => cur.cc === EUR);

                    // USD fields
                    setUSDText(dollarRes.txt);
                    setUSDState((dollarRes.rate).toFixed(2));

                    // EUR fields
                    setEURText(euroRes.txt);
                    setEURState((euroRes.rate).toFixed(2));

                    // console.log(dollarRes);
                }
            )
    }, [EUR, USD]);


    return (
        <header>
            <div className={cl.currencyWrapper}>
                <div>
                    <h3>{USDText}</h3>
                    <p>{USDState}</p>
                </div>
                <div>
                    <h3>{EURText}</h3>
                    <p>{EURState}</p>
                </div>
            </div>
        </header>
    )
}
