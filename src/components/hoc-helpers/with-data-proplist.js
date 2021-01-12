import React, {Component} from "react";
import Spinner from "../spinner";

const withDataPropList = (View, getData) => {

    return class extends Component {

        state = {
            data: null
            //propName: null,
            //propList: null
        };

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                        //propName: data.propName,
                        //propList: data.propList
                    });
                });
        }

        render() {

            const { data } = this.state;

            if(!data) {
                return <Spinner />
            }

            return <View {...this.props} data={data} />
        }
    };
};

export default withDataPropList;