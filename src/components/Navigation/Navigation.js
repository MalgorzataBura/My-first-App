import React, {Component} from 'react';
import MenuItem from './MenuItem';

class Navigation extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {items.map(item => (
                    <MenuItem key={item.id} link={item.link} name={item.name} />
                ))}
            </ul>
        );
    }
}

export default Navigation;