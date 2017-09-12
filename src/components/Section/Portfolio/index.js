import React from 'react';

//components
import Card from './Card';
import Item from './Item';

//data
import { items } from './items';

//CSS
import './styles.css';

class Portfolio extends React.Component{

    state = {openItem: false};

    toggleItem = (target) => {
            this.setState({openItem: target})
    }

    closeItem = () =>{
        this.setState({openItem: false})
    }

    render(){
        const cards = items.map((item)=>{
            return (
            <Card 
                item={item} 
                onClick={this.toggleItem} 
                key={item.id}
                full={false}></Card>
                );
            });

        return(
            <article className="flex card-wrapper">
                {!this.state.openItem ? 
                    cards : 
                    [<Card 
                        item={this.state.openItem} 
                        onClick={this.closeItem}
                        full={true}
                        key={this.state.openItem.id}/>,
                    <Item item={this.state.openItem} />]
                }
            </article> 
        )
    }
}

export default Portfolio;