import Promedio from './components/Promedio';
import UserCard from './props/UserCard';
import Greeting from './props/Greeting';
import ParentButtonOne from './props/ParentButtonOne';
import HelloWorld from './components/HelloWorld';
import ParentIncrementButton from './props/ParentIncrementButton';
import ParentInputNotifier from './props/ParentInputNotifier';
import ParentUserList from './props/ParentUserList';
import ParentLoginForm from './props/ParentLoginForm';

function App() {

const userData = { name: "Carlos", apellido: "Pérez", age: 30 , direccion: "Av. Occidental "};
  return (
    <>
      <Greeting name="María" />
      <HelloWorld />
      <Promedio />
      <UserCard user={userData} />
      <ParentButtonOne />
      <ParentIncrementButton />
      <ParentInputNotifier />
      <ParentUserList />
      <ParentLoginForm />
    </>
  );
}

export default App;
