import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';

class FetchningMessage extends Component {

  render() {
      
      return (
        <Message icon>
            <Icon name='circle notched' loading />
            {this.props.status === "fetching" && <Message.Content>
                <Message.Header>Please wait</Message.Header>
                Fetching data in progress.
            </Message.Content> }
            {this.props.status === "error" && <Message.Content>
                <Message.Header>Oh no!</Message.Header>
                An error occured while connecting to database.
            </Message.Content> }
        </Message>
      );
    }

};

export default FetchningMessage