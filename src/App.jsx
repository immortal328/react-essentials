import reactImg from './assets/react-core-concepts.png';
import components  from './assets/components.png';
import jsx  from './assets/jsx-ui.png';
import config  from './assets/config.png';
import stateMngmnt  from './assets/state-mgmt.png';

function Header(){
  return (
    <header>
        <img src={reactImg} alt="Stylized Atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function CoreConcept(props){
  return(
    <li>
      <img src={props.img} alt='Something'/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept title="Component" description="afdsdbgffgdb" img={components}/>
            <CoreConcept title="JSX" description="afdsdbgffgdb" img={jsx}/>
            <CoreConcept title="Config" description="afdsdbgffgdb" img={config}/>
            <CoreConcept title="State management" description="afdsdbgffgdb" img={stateMngmnt}/>
          </ul>
        </section>        
      </main>
    </div>
  );
}

export default App;
