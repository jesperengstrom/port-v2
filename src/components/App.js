import React, { Component } from 'react';

//css
import 'semantic-ui-css/semantic.min.css';
import './styles.css';

//my components
import Main from './Main';
import Section from './Section';
import Nav from './Nav';

//sections - scalable, just add more
const sections = [
  {
    name: 'hero',
    id: 's-0',
    style: { backgroundColor: '#AB5D5D'}
  },
  {
    name: 'portfolio',
    id: 's-1',
    style: { backgroundColor: '#6A6AC0' }
  },
  {
    name: 'about',
    id: 's-2',
    style: { backgroundColor: '#5E7D5E' }
  }
]

class App extends Component {

  state = {
    currentSection: sections[0],
    next: sections[1].id,
    last: false
  }

  setCurrentSection = (section) =>{
    this.setState({currentSection: section}, this.setNextSection) //calls setState twice, sould get a value then setstate
  }

  setNextSection = () => {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].name === this.state.currentSection.name) {
        if (i === sections.length - 1) { //if we're on the last section, go up.
          this.setState({next: sections[i - 1].name, last : true})
        } else { //else, keep on going down...
          this.setState({next: sections[i + 1].name, last : false})
        }
      }
    }
  }

  render() {
    console.log('renders! ' + this.state.currentSection.name)
    return (
      <div style={this.state.currentSection.style} className="flex flex-row full-height bg-fade p-1">
        <Main>
        {
          sections.map((item, index) =>{
            return <Section setSection={this.setCurrentSection} section={item} key={index}></Section>
            })
          }
        </Main>
        <Nav next={this.state.next} last={this.state.last}/>
      </div>
    );
  }
}

export default App;
