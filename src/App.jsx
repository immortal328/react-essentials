import { useState } from 'react';

import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

import {CORE_CONCEPTS} from './js/data.js'
import { EXAMPLES } from './js/data.js';

function App() {

  //useState which have 'selectedTopic' and 'setSelectTopic' method to update value 
  let [selectedTopic, setSelectTopic] = useState()

  //Method Which responsible to change value of 'selectedTopic' varible
  function selectHandler(selectedButton){
    setSelectTopic(selectedButton);
  }

  //Code WHich responsible to Conatent Based on Selected Tab
  let tabContent = <p>Please, Select Topic..</p>;
  if(selectedTopic){
    tabContent =
     <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
     </div>
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>. . . Core Concepts . . .</h2>
          <ul>
            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
            {CORE_CONCEPTS.map((reactConcepts)=>
            <CoreConcept key={reactConcepts.title} {...reactConcepts}/>)}
          </ul>
        </section> 
        <section id='examples'>
          <h2>Examples</h2> 
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => selectHandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => selectHandler('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => selectHandler('state')}>State</TabButton>
          </menu>
            {/* {!selectedTopic ? <p>Please, Select Topic..</p>:
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>  }      */}

            {tabContent}
        </section>       
      </main>
    </div>
  );
}

export default App;
