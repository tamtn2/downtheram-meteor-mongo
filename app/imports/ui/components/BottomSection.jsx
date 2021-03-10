import React from 'react';
import { Menu, Container, Button, Icon } from 'semantic-ui-react';

export default class BottomSection extends React.Component {
  render() {
    return (
      <Container>
        <Menu borderless className='bottommenu'>
          <Menu.Item>
            <Button Icon color='blue'>
              <Icon name='thumbs up'>Like</Icon>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button color='blue'>Share</Button>
          </Menu.Item>
          <Menu.Item><p>3.3k People like this. Sign up to see what your friends like</p></Menu.Item>
          <Menu.Item position='right'>
            <Button
              icon='twitter'
              color='blue'
              content='Follow @DownloadMoreRAM'
              label={{ basic: true, color: 'twitter', pointing: 'left', content: '8,000 Followers' }}/>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}
