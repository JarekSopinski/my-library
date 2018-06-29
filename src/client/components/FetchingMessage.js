import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';

class FetchningMessage extends Component {

  render() {

      return (
        <Message icon>
            <Icon name='circle notched' loading />
            <Message.Content>
            <Message.Header>Please wait</Message.Header>
                Fetching data in progress.
            </Message.Content>
        </Message>
      );
    }

};

export default FetchningMessage