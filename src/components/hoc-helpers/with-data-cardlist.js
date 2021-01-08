import React, {Component} from 'react';
//import Spinner from '../spinner';
//import ErrorIndicator from '../error-indicator';


const withDataCardList = (View, getData) => {
    return class extends Component {

        state = {
            cardList: null,
            name: null,
            propName: null
        }

        componentDidMount() {
            this.updateCardList();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(this.props.propName !== prevProps.propName || this.props.name !== prevProps.name)  {
                this.updateCardList();
            }
        }

        updateCardList() {

            const { propName, name } = this.props;
            //console.log(this.props);
            //console.log(`propName - ${propName}`);
            //console.log(`name - ${name}`);

            if (!propName || !name) {
                return;
            }

            getData(name)
                .then((cardList) => {
                    if (!cardList) {
                        console.log('you have some problem with CARDLIST...');
                        return;
                    }
                    this.setState({
                        propName,
                        name,
                        cardList
                    })
                })
        }

        render() {

            const { propName, name, cardList } = this.state;
            //console.log(`propName - ${propName}`);
            //console.log(`name - ${name}`);
            //console.log(cardList);

            if(!propName) {
                return <p>Select a property from a list</p>
            }

            return <View {...this.props} propName={propName} cardList={cardList} nane={name} />;
        }
    };
};

export default withDataCardList;