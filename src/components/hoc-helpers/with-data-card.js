import React, {Component} from 'react';
//import Spinner from '../spinner';
//import ErrorIndicator from '../error-indicator';


const withDataCard = (View, getData) => {
    return class extends Component {

        state = {
            card: null,
            id: null
        }

        componentDidMount() {
            this.updateCard();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(this.props.id !== prevProps.id)  {
                this.updateCard();
            }
        }

        updateCard() {

            const { id } = this.props;
            //console.log(this.props);
            //console.log(`id - ${id}`);

            if (!id) {
                return;
            }

            getData(id)
                .then((card) => {
                    if (!card) {
                        console.log('you have some problem with CARD...');
                        return;
                    }
                    this.setState({
                        card,
                        id
                    })
                })
        }

        render() {

            const { id, card } = this.state;
            //console.log(`card - ${card}`);
            //console.log(`id - ${id}`);

            if(!card) {
                return <p>Select a card from a cardList...</p>
            }

            return <View {...this.props} id={id} card={card} />;
        }
    };
};

export default withDataCard;