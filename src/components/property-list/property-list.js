import React, { Fragment } from 'react';

import './property-list.css';

const PropertyList = (props) => {

    const { data, onPropSelected } = props;
    //console.log(onPropSelected);
    const { propName, propList } = data;
    //console.log(`onPropSelected - ${onPropSelected}`);
    //console.log(`propName from data - ${propName}`);
    //console.log(`propList from data - ${propList}`);

    /*let [style, setStyle] = useState('list-group-item');
*/
    /*useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        document.title = `Вы установили стиль - ${style}`;
    });*/

    const items = propList.map((name, id) => {

        return (

            <li className="list-group-item"
                key={id}
                onClick={() => {
                    onPropSelected(name, propName);

                    /*let foo = document.querySelectorAll("a");
                    for (let i = 0; i < foo.length; i++) {
                        foo[i].classList.remove("list-group-item-clicked");
                    }
                    /!*e.currentTarget.classList.remove("list-group-item");*!/
                    e.target.className="list-group-item-clicked";*/

                    //console.log(`name - ${name}`);
                    //console.log(`propName - ${propName}`);
                }}>
                <button>{ name }</button>
            </li>

        );
    });

    return (
        <Fragment>
            <h2 className="pl-4">{ propName }</h2>
            {/*<p>`Вы установили стиль - {style}`</p>*/}
            {/*<button onClick={() => setStyle("list-group-item-clicked")}>
                Нажми на меня
            </button>*/}
            <ul className="item-list list-group">{ items }</ul>
        </Fragment>
    );

}

export default PropertyList;