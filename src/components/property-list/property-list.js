import React, { Fragment, useState, useEffect } from 'react';
//import classNames from 'classnames';

import './property-list.css';

const PropertyList = (props) => {

    const { data, onPropSelected } = props;
    //console.log(onPropSelected);
    const { propName, propList } = data;


    const [style, setStyle] = useState('');

    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        document.title = `Вы установили стиль - ${style}`;
    });

    const items = propList.map((name, id) => {

        return (

            <li className='list-group-item'
                key={id}
                onClick={(e) => {
                    onPropSelected(name, propName);

                    let foo = document.querySelectorAll("li");
                    for (let i = 0; i < foo.length; i++) {
                        foo[i].classList.remove("list-group-item-clicked");
                    }
                    e.currentTarget.className="list-group-item-clicked";

                    console.log(e.currentTarget);
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