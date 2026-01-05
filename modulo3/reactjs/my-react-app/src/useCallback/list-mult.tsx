import Lista from './Lista-mult';

export default function App() {
  const elementos = [1,2,3,4,5,6,7,8,9,10];

  return (
    <>
      <h2>Ejemplo de Lista</h2>
      <Lista items={elementos} />
    </>
  );
}