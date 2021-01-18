import React, { Fragment } from 'react';
import classNames from 'classnames';

import './property-list.css';

const PropertyList = (props) => {

    const { data, onPropSelected } = props;
    //console.log(props);
    const { propName, propList } = data;

    const items = propList.map((name, id) => {
        return (
            <li className="list-group-item"
                key={id}
                onClick={() => {
                    onPropSelected(name, propName);
                    //console.log(`name - ${name}`);
                    //console.log(`propName - ${propName}`);
                }}>
                <a href="/#">{ name }</a>
            </li>

        );
    });

    return (
        <Fragment>
            <h2 className="pl-4">{ propName }</h2>
            <ul className="item-list list-group">
                { items }
            </ul>
        </Fragment>
    );

}

export default PropertyList;