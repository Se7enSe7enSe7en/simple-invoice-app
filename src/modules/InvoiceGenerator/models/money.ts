export class Money {
    private _value: number;
    get value(): number {
        return this._value
    }
    set value(theValue: number) {
        this._value = theValue
    }

    private _currency: string
    get currency(): string {
        return this._currency
    }
    set currency(theCurrency: string) {
        this._currency = theCurrency
    }

    constructor(theValue?: number | string) {
        this._value = 0
        this._currency = '$'

        if (theValue) {
            this._value = +theValue
            this._currency = '$'
            console.log('value: ', this._value);
            console.log('currency: ', this._currency);
        }
    }

    moneyFormat() {
        const formatted = new Intl.NumberFormat('es-US', {
            style: 'currency',
            currency: this._currency,
            // ₱
        }).format(this._value);
        return formatted
    }
}