import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

interface State {
  radio:number;
}

interface Action {
  value:number;
}

const initialState: State = { radio: 0};

function reducer(state: State, action: Action): State {
  return {...state,radio: action.value };
}

export default function areaCirculo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ value: Number(e.target.value) });
  }

  const area = 3.14 * state.radio * state.radio;

  return (
    <form>
      <input
        name="number"
        value={state.radio}
        onChange={handleChange}
        placeholder="Radio Circulo"
      />
      <p>Radio: {state.radio}</p>
      <p>Área: {area.toFixed(2)}</p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
