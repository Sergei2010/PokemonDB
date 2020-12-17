import React, {Component, Fragment} from 'react';
import ApiPokemonService from '../../services/api-pokemon-service';
import ErrorButton from '../error-button/error-button';

import './card-list.css';

export default class CardList extends Component {

    apiPokemonService = new ApiPokemonService();

    state = {
        cardList: null
    }

    componentDidMount() {
        this.updateCardList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.propName !== prevProps.propName)  {
            this.updateCardList();
        }
    }

    updateCardList() {
        const { propName } = this.props;
        if (!propName) {
            return;
        }

        this.setState({propName});

        this.apiPokemonService
            .getTypesCardList(propName)
            .then((cardList) => {
                this.setState({cardList})
            })

    }

    renderItems(arr) {
        return arr.map(({imageUrl, id}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => {
                        this.props.onCardSelected(id);
                        //console.log(id);
                    }}
                >
                    <img src={imageUrl} alt='imageCard' />
                </li>
            );
        });
    }


    render() {

        if(!this.state.cardList) {
            return <p>Select a property from a list</p>
        }

        const { cardList } = this.state;

        const items = this.renderItems(cardList);

        return (
            <Fragment>
                <h2 className="pl-4">{this.state.propName}</h2>
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
}