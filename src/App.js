import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import EventPage from './components/EventPage';
import ContractorList from './components/ContractorList';
import CoordinatorSection from './components/CoordinatorSection';

function App() {

  return (

    <div  style={{display:"flex",padding:"1em",gap:"0.5em", height:"90vh",background:"line"}}>
       <SideBar /> 
        <EventPage />
    </div>
  );
}

export default App;
