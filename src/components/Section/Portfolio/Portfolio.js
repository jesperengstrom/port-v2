import React from 'react';

//components
import Card from './Card/Card';
import Item from './Item/Item';

//data
import { items } from './items';

//CSS
import './Portfolio.css';

class Portfolio extends React.Component{

    componentDidMount() {
        document.getElementById('double').addEventListener('transitionend', (e)=> {
            //only select transitionend events on 'double-with'-element
            let arr = Array.from(e.target.classList);
            if (e.propertyName === 'transform' && arr.includes('double-width')) {
                    let hidden = arr.includes('move-left') ? 'closedcards' : 'opencard';
                    this.setState({hidden: hidden})
            }})
    }

    state = { 
        openItem: items[0],
        isOpen: false,
        hidden: false 
    };

    openCard = (item) => {
            this.setState({openItem: item, isOpen: true, hidden: false})
    }

    closeCard = () => {
        this.setState({isOpen: false, hidden: false})
    }

    render(){
        const allCards = items.map((item)=>{
            return (   
                <Card 
                    item={item} 
                    openCard={this.openCard} 
                    key={item.id}>
                </Card>
            );
        });

        return(
            <span id="double" className={`flex flex-row double-width ${this.state.isOpen ? 'move-left' : '' }`}>
                <div className={`flex card-wrapper closedcards-wrapper ${this.state.hidden === 'closedcards' ? 'no-height' : ''}`}>
                    {allCards}
                </div>
                <Item 
                    hidden={this.state.hidden}
                    item={this.state.openItem} 
                    isOpen={this.state.isOpen} 
                    closeCard={this.closeCard}/>
            </span>
        )
    }
}

export default Portfolio;