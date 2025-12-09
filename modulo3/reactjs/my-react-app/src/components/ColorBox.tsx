import { useState } from 'react';

export default function ColorBox() {
  const [color, setColor] = useState('lightblue');

  return (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
      <button onClick={() => setColor('lightgreen')}>Cambiar color</button>
      <button onClick={() => setColor('plum')}>Cambiar a púrpura</button>
      <button onClick={() => setColor('lightgray')}>Cambiar a gris</button>
    </>
  );
}