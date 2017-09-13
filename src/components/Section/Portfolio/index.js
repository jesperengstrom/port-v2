import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

//components
import Card from './Card';
import Item from './Item';

//data
import { items } from './items';

//CSS
import './styles.css';

class Portfolio extends React.Component{

    state = {openItem: false};

    openCard = (item) => {
            this.setState({openItem: item})
    }

    closeCard = () =>{
        this.setState({openItem: false})
    }

    render(){
        const allCards = items.map((item)=>{
            return (   
                <Card 
                    item={item} 
                    onClick={this.openCard} 
                    key={item.id}>
                </Card>
            );
        });

        return(
                <CSSTransitionGroup
                    className="flex card-wrapper"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {!this.state.openItem ? 
                        allCards : 
                        [<Card 
                            item={this.state.openItem} 
                            onClick={this.closeCard} 
                            key={this.state.openItem.id} 
                            opened/>,
                        <Item key="openedItem" item={this.state.openItem} />]}
                </CSSTransitionGroup>
        )
    }
}

export default Portfolio;