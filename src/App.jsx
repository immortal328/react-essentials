import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import {CORE_CONCEPTS} from './js/data.js'
import TabButton from './components/TabButton.jsx';

function App() {
  function selectHandler(selectedButton){
    console.log(selectedButton+"...");
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>. . . Core Concepts . . .</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section> 
        <section id='examples'>
          <h2>Examples</h2> 
          <menu>
            <TabButton onSelect={() => selectHandler('components')}>Components</TabButton>
            <TabButton onSelect={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => selectHandler('props')}>Props</TabButton>
            <TabButton onSelect={() => selectHandler('state')}>State</TabButton>
          </menu>
          Amr Pujari        
        </section>       
      </main>
    </div>
  );
}

export default App;
