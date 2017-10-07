import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './SectionHeader.css';

//libraries
import VisibilitySensor from 'react-visibility-sensor';

class SectionHeader extends React.Component {

    state = {animated: false}

    visibleHeader = (status) => {
        if (status) {
            this.setState({animated: true})
        }
    }

    render() {
        let lineLength = this.state.animated ? 'underline-long' : 'underline-none';
        if (this.props.displayName) {
            return (
                this.props.displayName && 
                <header>
                    <div className="section-header-frame">
                        <h2>{this.props.displayName}</h2>
                        <div className={`section-header-underline ${lineLength}`}></div>
                        <VisibilitySensor partialVisibility={true} minTopValue={250} onChange={this.visibleHeader}/>
                    </div>
                </header>
            );
        } 
        return null;
    }
}

SectionHeader.propTypes = {displayName: PropTypes.oneOfType([PropTypes.string,PropTypes.bool])};

export default SectionHeader;