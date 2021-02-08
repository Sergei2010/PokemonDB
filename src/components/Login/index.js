import React from 'react';
import { FlexWrapper, Panel, Button } from '../index';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../Auth';
import Authorization from "../authorization";

export default withAuth(({ isAuthorized, authorize }) =>

    isAuthorized ? (
        <Redirect to="/public" />
    ) : (
        <FlexWrapper>
            <Panel>
                {/*<h1>Вы не авторизованы</h1>*/}

                <Authorization />

                <Button onClick={authorize} type="submit" className="btn btn-primary">Авторизоваться</Button>

            </Panel>
        </FlexWrapper>
    )
);