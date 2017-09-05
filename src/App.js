import React, { Component } from 'react';

//css
import 'semantic-ui-css/semantic.min.css';
import './App.css';

//my components
import { Main } from './components/Main/Main';
import { Section } from './components/Section/Section';

//sections props
const sections = [
  {
    name: 'hero',
    bgClass: 'bg-hero'
  },
  {
    name: 'portfolio',
    bgClass: 'bg-portfolio'
  },
  {
    name: 'about',
    bgClass: 'bg-about'
  }
]

class App extends Component {
  state = {currentSection: sections[0]}

  setCurrentSection = (section) =>{
    this.setState({currentSection: section})
    console.log('current section: ' + this.state.currentSection.name)
  }

  render() {
    return (
      <div className={`App fade ${this.state.currentSection.bgClass}`}>
        {
          sections.map((item, index) =>{
          return <Section setSection={this.setCurrentSection} section={item} key={index}></Section>
        })
        }
      </div>
    );
  }
}

export default App;
