import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className='topmenu'>
        <Container>
          <Image src='https://downloadmoreram.com/img/logo.png' size='tiny' alt='topleftlogo'/>
          <Menu.Item header position='right'>Home</Menu.Item>
          <Menu.Item header><p className='colortext'>Download</p></Menu.Item>
          <Menu.Item header><p className='colortext'>Shop</p></Menu.Item>
          <Menu.Item header><p className='colortext'>Contact</p></Menu.Item>
        </Container>
      </Menu>
    );
  }
}
