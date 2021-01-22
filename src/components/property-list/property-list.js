import React, { Fragment, useState, useEffect } from 'react';
//import classNames from 'classnames';

import './property-list.css';

const PropertyList = (props) => {

    const { data, onPropSelected } = props;

    const { propName, propList } = data;

    const [style, setStyle] = useState('');

    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        document.title = `Вы установили стиль - ${style}`;
    });

    const items = propList.map((name, id, itemClicked) => {

        return (

            <li className='list-group-item'
                key={id}
                onClick={() => {
                    onPropSelected(name, propName, itemClicked);
                    console.log(`itemClicked - ${itemClicked}`);
                    console.log(`name - ${name}`);
                    console.log(`propName - ${propName}`);
                }}>
                <a href="/#">{ name }</a>
            </li>

        );
    });

    return (
        <Fragment>
            <h2 className="pl-4">{ propName }</h2>
            <p>`Вы установили стиль - {style}`</p>
            <button onClick={() => setStyle("list-group-item-clicked")}>
                Нажми на меня
            </button>
            <ul className="item-list list-group">
                { items }
            </ul>
        </Fragment>
    );

}

export default PropertyList;