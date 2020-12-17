import React, {Component, Fragment} from 'react';
import Spinner from '../spinner';

import './property-list.css';

export default class PropertyList extends Component {

    state = {
        propList: null,
        propName: "types"
    };
    propName;

    componentDidMount() {
        const { getData } = this.props;
            getData()
            .then((propList) => {
                this.setState({
                    propList
                });
                //console.log(this.state);
            });
    }

    renderItems(arr) {

        return arr.map((name, id ) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => {
                        this.props.onPropSelected(name);
                        //console.log(name);
                    }}
                    >
                    { name }
                </li>
            );
        });
    }

    render() {

        const { propList } = this.state;

        if(!propList) {
            return <Spinner />
        }

        const items = this.renderItems(propList);

        return (
            <Fragment>
                <h2 className="pl-4">{this.state.propName}</h2>
                <ul className="item-list list-group">
                    { items }
                </ul>
            </Fragment>
        );
    }
}