import React, { Component } from 'react';
import { FlexWrapper } from '../index';
import { withAuth } from '../../Auth';
import Spinner from "../spinner";

class Callback extends Component {
    componentDidMount(){
        const {handleAuthentication} = this.props;
        if (handleAuthentication) {
            handleAuthentication()
        }
    }

    render() {
        return (
            <FlexWrapper >
                {/*<h1>Проходим регистрацию!</h1>*/}
                {/*<img src={loading} alt="loading"/>*/}
                <Spinner />
            </FlexWrapper>
        );
    }
}

export default withAuth(Callback);