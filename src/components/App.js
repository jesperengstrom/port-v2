import React, { Component } from 'react';

//css
import 'semantic-ui-css/semantic.min.css';
import './styles.css';

//my components
import Main from './Main';
import Section from './Section';
import Nav from './Nav';

//sections props
const sections = [
  {
    name: 'hero',
    id: 's-0',
    bgClass: 'bg-hero'
  },
  {
    name: 'portfolio',
    id: 's-1',
    bgClass: 'bg-portfolio'
  },
  {
    name: 'about',
    id: 's-2',
    bgClass: 'bg-about'
  }
]

class App extends Component {
  state = {
    currentSection: sections[0],
    next: sections[1].id,
    last: false
  }

  setCurrentSection = (section) =>{
    this.setState({currentSection: section}, this.setNextSection)
  }

  setNextSection = () => {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].name === this.state.currentSection.name) {
        if (i === sections.length - 1) { //if we're on the last section, go up.
          this.setState({next: sections[i - 1].id, last : true})
        } else { //else, keep on going down...
          this.setState({next: sections[i + 1].id, last : false})
        }
      }
    }
  }

  render() {
    return (
      <div className={`flex flex-row full-height fade p-1 ${this.state.currentSection.bgClass}`}>
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
