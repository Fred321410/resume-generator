import React from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Page from '../../containers/Page/Page';
import UsersList from '../../containers/UsersList/UsersList';
import './Users.scss'

function Users(): JSX.Element {
    return (
        <Page
            left={
            <ContentContainer title='User selection'>
                <div>
                  Choose a user from the right panel
                </div>
            </ContentContainer>
            }
            right={
                <UsersList />
            }
        />
      );
}

export default Users;
