import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

export default class MiddleSection extends React.Component{
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <p className='bigtext'>Download More RAM!</p>
        </Grid.Row>
        <Grid.Row>
          <Header textAlign='center'><Header.Content>Fast, Instant, FREE</Header.Content></Header>
        </Grid.Row>
        <Grid.Row>
          <Image src='https://downloadmoreram.com/img/banner.png' alt='bigpclogo'/>
        </Grid.Row>
      </Grid>
    );
  }
}
