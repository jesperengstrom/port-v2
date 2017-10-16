import React from 'react';

//components
import Card from './Card/Card';
import Opencard from './Card/Opencard';
import Item from './Item/Item';

//data
import { items } from './items';

//CSS
import './Portfolio.css';

class Portfolio extends React.Component{

    state = { 
        openItem: items[0],
        isOpen: false 
    };

    openCard = (item) => {
            this.setState({openItem: item, isOpen: true})
    }

    closeCard = () => {
        this.setState({isOpen: false})
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
            <span className={`flex flex-row double-width ${this.state.isOpen ? 'move-left' : '' }`}>
                <div className="flex card-wrapper">
                    {allCards}
                </div>
                <div className="flex card-wrapper">
                    <Item item={this.state.openItem} isOpen={this.state.isOpen} />
                    <aside className="flex flex-column ml-7">
                    <Opencard 
                        item={this.state.openItem} 
                        closeCard={this.closeCard}/>
                    </aside>
                </div>
            </span>
        )
    }
}

export default Portfolio;