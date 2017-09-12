import React, { Component } from 'react';

//css
import 'semantic-ui-css/semantic.min.css';
import './styles.css';

//data
import sections from './sections';

//my components
import Main from './Main';
import Section from './Section';
import Nav from './Nav';

class App extends Component {

  state = {
    currentSection: sections[0],
    next: sections[1].id,
    last: false
  }

  setCurrentSection = (curSection) =>{
    let next, last;

    for (let i = 0; i < sections.length; i++) {
      if (sections[i].name === curSection.name) {
        if (i === sections.length - 1) { //if we're on the last section, go up.
            next = sections[i - 1].name; 
            last = true;
        } else { //else, keep on going down...
            next = sections[i + 1].name;
            last = false;
        }
      }
    }
    this.setState({
      currentSection: curSection,
      next: next,
      last: last
    })
    console.log('current section ' + this.state.currentSection.name);
  }


  render() {
    const mappedSections = sections.map((item, index) =>{
      return <Section setSection={this.setCurrentSection} section={item} key={index}></Section>
      })

    return (
      <div style={this.state.currentSection.style} className="flex flex-row bg-fade p-1">
        <Main>
          {mappedSections}
        </Main>
        <Nav next={this.state.next} last={this.state.last}/>
      </div>
    );
  }
}

export default App;
