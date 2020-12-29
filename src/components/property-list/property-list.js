import React, {Fragment} from 'react';

import './property-list.css';

const PropertyList = (props) => {

    const { data, onPropSelected } = props;

    const { propName, propList } = data;

    //console.log(props);

    const items = propList.map((name, id) => {

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => {
                    onPropSelected(name);
                    //console.log(name);
                }}>
                { name }
            </li>
        );
    });

    return (
        <Fragment>
            <h2 className="pl-4">{propName}</h2>
            <ul className="item-list list-group">
                { items }
            </ul>
        </Fragment>
    );

}

export default PropertyList;