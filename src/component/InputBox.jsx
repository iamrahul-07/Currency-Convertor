import React,{useEffect, useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className="",
}){
    const id=useId()
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block text-lg'>{label}</label>
                <input type="number"
                id={id}
                className='outline-none w-full bg-transparent py-1.5 text-xl'
                placeholder='Amount'
                disabled={amountDisabled}
                value={amount}
                onChange={(e)=>{
                    onAmountChange && onAmountChange(Number(e.target.value))
                }}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <select className='rounded-lg px-1 bg-gray-200 cursor-pointer outline-none h-8 mt-5' value={selectedCurrency} onChange={(e)=>{onCurrencyChange &&
                    onCurrencyChange(e.target.value)
                }}
                disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default InputBox;
