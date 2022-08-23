import React, { Component } from 'react';
import cl from './currency.module.scss'

export class Currency extends Component {
    state = {
        currency: this.props.currencies[0].name,
        value: 0,
    }

    onChange = ({ target: { value, dataset: { currency } } }) => {
        this.setState({
            currency,
            value,
        });
    }

    render() {
        const { currency, value } = this.state;
        const { rate } = this.props.currencies.find(n => n.name === currency);

        return (
            <div className={cl.counterBody}>
                {this.props.currencies.map(n => (
                    <div className={cl.valueItem} key={n.name}>
                        <p>{n.name}:</p>
                        <input
                            data-currency={n.name}
                            value={currency === n.name ? value : (value / rate * n.rate).toFixed(2)}
                            onChange={this.onChange}
                        />
                    </div>
                ))}
            </div>
        );
    }
}


