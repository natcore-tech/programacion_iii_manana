import { useState } from "react";

export function InputParrafo(){
    const  [texto1, setTexto1] = useState("");
    const  [texto2, setTexto2] = useState("");

    const suma = Number(texto1)+Number(texto2);

    return (
        <div>
            <input
            value={texto1}
            placeholder="Ingrese Texto"
            onChange={(e)=>setTexto1(e.target.value)}
            />
            <input
            value={texto2}
            placeholder="Ingrese Texto"
            onChange={(e)=>setTexto2(e.target.value)}
            />
            <p>{suma || '....'}</p>
        </div>
    )

}