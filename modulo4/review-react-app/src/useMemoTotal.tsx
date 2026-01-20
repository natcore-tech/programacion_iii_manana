import {useMemo, useState} from "react";

export function UseMemoTotal(){
    const  [price, setPrice] = useState(0);
    const  [qty, setQty] = useState(0);

    const total = useMemo(()=>{
        console.log("Recalculando total")
        return price * qty
    },[price, qty]);

    return (
        <div>
            <input
            value={price}
            placeholder="Ingrese Numero 1"
            onChange={(e)=>setPrice(Number(e.target.value))}
            />
            <input
            value={qty}
            placeholder="Ingrese Numero 2"
            onChange={(e)=>setQty(Number(e.target.value))}
            />
            <p>{total || '....'}</p>
        </div>
    )

}