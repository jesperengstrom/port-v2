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
        const cards = items.map((item, index)=>{
            return (
            <Card 
                item={item} 
                onClick={this.toggleItem} 
                reverse={index % 2 !== 0 ? true : false} //every other card should be image-top
                key={'card-' + index}></Card>
                );
            });

        return(
            <article className="flex card-wrapper">
                {!this.state.openItem ? 
                    cards : 
                    <Item item={this.state.openItem} onClick={this.closeItem} />}
            </article>
            );
    }
}

export default Portfolio;