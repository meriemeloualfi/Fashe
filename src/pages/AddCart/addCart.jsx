import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../utils/contextProvider';
import { images } from '../../constants';

export const Addcart = () => {
    const [data, setData, basket, setBasket] = useContext(MyContext);
    const [localBasket, setLocalBasket] = useState(basket);

    useEffect(() => {
        setLocalBasket(basket);
    }, [basket]);

    const updateQuantity = (index, delta) => {
        const updatedBasket = [...localBasket];
        updatedBasket[index].quantity = Math.max((updatedBasket[index].quantity || 1) + delta, 1);
        setLocalBasket(updatedBasket);
        setBasket(updatedBasket);
    };

    const calculateTotal = () => {
        return localBasket.reduce((total, item) => {
            const price = parseFloat(item.price);
            if (isNaN(price)) {
                console.error(`Invalid price for item ${item.name}: ${item.price}`);
                return total;
            }
            return total + price * (item.quantity || 1);
        }, 0).toFixed(2);
    };

    return (
        <>
            <div className='mt-[100px]'>
                <img src={images.heading1} alt="" className='h-[35vh] relative' />
                <h1 className='absolute top-[23vh] left-[40vw] text-white text-center font-bold text-5xl'>Your Shopping Cart</h1>
            </div>
            <div className='flex w-[90vw] gap-3 items-center justify-center p-5 flex-wrap'>
                <div className='flex gap-24 items-center justify-center border-b-2 p-2'>
                    <div className='w-[10vw]'></div>
                    <h5>PRODUCT NAME</h5>
                    <h5>UNIT PRICE</h5>
                    <h5>QUANTITY</h5>
                    <h5>TOTAL</h5>
                </div>
                {localBasket.map((element, index) => {
                    const price = parseFloat(element.price);
                    console.log(`Element price: ${element.price}, Parsed price: ${price}`);
                    return (
                        <div className='flex flex-col gap-2' key={index}>
                            <div className="flex gap-14 items-center justify-center border-b-2 p-5">
                                <img className="w-[10vw] h-[20vh] object-cover transition-transform duration-500" src={element.img} alt="" />
                                <p>{element.name}</p>
                                <p>${isNaN(price) ? 'Invalid Price' : price.toFixed(2)}</p>
                                <div className='pb-6'>
                                    <div className='flex items-center gap-4 bg-slate-300 w-[100%] p-1 rounded-full'>
                                        <button onClick={() => updateQuantity(index, 1)} className='px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>+</button>
                                        <h1>{element.quantity || 1}</h1>
                                        <button onClick={() => updateQuantity(index, -1)} disabled={(element.quantity || 1) === 1} className='px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>-</button>
                                    </div>
                                </div>
                                <p>${isNaN(price) ? 'Invalid Price' : (price * (element.quantity || 1)).toFixed(2)}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='flex flex-col gap-4 border-2 border-green-950 p-5 w-[30vw] relative left-[60vw] m-9'>
                <h1>Cart Total</h1>
                <div className='flex gap-4 items-center'>
                    <h3>Subtotal:</h3>
                    <h2>${calculateTotal()}</h2>
                </div>
                <button className='h-[8vh] w-[20vw] rounded-3xl text-slate-50 p-3 bg-green-950'>PROCEED TO CHECK OUT</button>
            </div>
        </>
    );
}
