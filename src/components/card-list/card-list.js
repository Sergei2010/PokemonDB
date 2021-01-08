import React, { Fragment } from 'react';
import ErrorButton from "../error-button";

import './card-list.css';

const CardList = (props) => {

    const { name, propName, cardList,  onCardSelected } = props;

    //console.log(`name - ${name}`);
    //console.log(`propName - ${propName}`);
    //console.log(cardList);
    //console.log(`onCardSelected - ${onCardSelected}`);

    //console.log(props);
    const items = cardList.map(({imageUrl, id}) => {
        return (
            <li className="list-group-item"
                key={id}
                onClick={() => {
                    onCardSelected(id, name);
                    //console.log(id);
                }}
            >
                <img src={imageUrl} alt='imageCard'/>
            </li>
        );
    });

    return (
        <Fragment>
            <h2 className="pl-4">{ propName }</h2>
            <ErrorButton />
            <ul className=" card-list
                    list-group
                    list-group-horizontal
                    flex-wrap
                    justify-content-around">
                { items }
            </ul>
        </Fragment>
    )
}

export default CardList;