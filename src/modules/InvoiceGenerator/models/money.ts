export class Money {
    private _value
    get value(): number {
        return this._value
    }
    set value(theValue: number) {
        this._value = theValue
    }

    private _currency
    get currency(): string {
        return this._currency
    }
    set currency(theCurrency: string) {
        this._currency = theCurrency
    }

    constructor(thisValue = 0, thisCurrency = 'PHP') {
        this._value = thisValue
        this._currency = thisCurrency
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