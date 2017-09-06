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
  state = {
    currentSection: sections[0]
  }

  setCurrentSection = (section) =>{
    this.setState({currentSection: section})
    console.log('current section: ' + this.state.currentSection.name)
  }

  render() {
    return (
      <div className={`App flex flex-row full-height fade p-1 ${this.state.currentSection.bgClass}`}>
        <Main>
        {
          sections.map((item, index) =>{
            return <Section setSection={this.setCurrentSection} section={item} key={index}></Section>
            })
          }
        </Main>
        <Nav />
      </div>
    );
  }
}

export default App;
