import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

class AppHeader extends Component {

    render() {
        return (
        <div style={{"padding": "25px 0"}}>
          <Header 
            icon 
            textAlign="center" 
            size="huge" 
            >
          <Icon 
            name="book" 
            circular 
            color="orange"
            size="huge" 
            />
          <Header.Content>
              MY LIBRARY
          </Header.Content>
          <Header.Subheader>
              A PERSONAL BOOK APPLICATION
          </Header.Subheader>
        </Header>
      </div>
        );
      }

};

export default AppHeader;