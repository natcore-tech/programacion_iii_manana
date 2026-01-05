import Promedio from './components/Promedio';
import UserCard from './props/UserCard';
import Greeting from './props/Greeting';
import ParentButtonOne from './props/ParentButtonOne';
import HelloWorld from './components/HelloWorld';
import ParentIncrementButton from './props/ParentIncrementButton';
import ParentInputNotifier from './props/ParentInputNotifier';
import ParentUserList from './props/ParentUserList';
import ParentLoginForm from './props/ParentLoginForm';
import HoverFont from './useState/HoverFont';
import AccessWithLimit from './useState/AccessWithLimit';
import LoginWithLimit from './useState/LoginWithLimit';
import DocumentTitleChanger from './useState/DocumentTitleChanger';
import PostLikes from './useState/PostLikes';
import CheckboxSummary from './useState/CheckboxSummary';
import LanguageSwitcher from './useState/LanguageSwitcher';
import MultiSwitch from './useState/MultiSwitch';
import DynamicColor from './useState/DynamicColor';
import ClickHistory from './useState/ClickHistory';
import LogEffect from './useEffect/logEffect';
import FetchUser from './useEffect/FetchUser';
import FocoAutomatico from "./useRef/FocoAutomatico.tsx";
import CirculoColorido from "./useRef/CirculoColorido.tsx";
import ExpensiveCalc from "./useMemo/ExpensiveCalc.tsx";
import FiltroLista from "./useMemo/FiltroLista.tsx";
import TablaOrdenada from "./useMemo/TablaOrdenada.tsx";
import PrimosMemo from "./useMemo/PrimosMemo.tsx";
import ContadorLetras from "./useMemo/ContadorLetras.tsx";
import Contador from "./useCallback/Contador.tsx";
import Padre from "./useCallback/ReRender.tsx";
import Saludo from "./useCallback/Saludo.tsx";
import AreaTriangulo from "./useState/AreaTriangulo.tsx";

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
        <HoverFont />
        <AccessWithLimit />
        <LoginWithLimit />
        <DocumentTitleChanger />
        <PostLikes />
        <CheckboxSummary />
        <LanguageSwitcher />
        <MultiSwitch />
        <DynamicColor />
        <ClickHistory />
        <LogEffect />
        <FetchUser />
        <FocoAutomatico />
        <ExpensiveCalc/>
        <FiltroLista/>
        <TablaOrdenada/>
        <PrimosMemo/>
        <ContadorLetras/>
        <Contador/>
        <Padre/>
        <Saludo/>
        <AreaTriangulo/>




    </>
  );
}

export default App;
