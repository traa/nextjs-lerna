import React from 'react';
import { Provider } from 'mobx-react';
import initStore from '@stores/general';

export default class IndexPage extends React.Component {
  // static getInitialProps ({ req }) {
    // const isServer = !!req
    // const store = initStore(isServer)
    // return { lastUpdate: store.lastUpdate, isServer }
  // }

  // constructor (props) {
    // super(props)
    // this.store = initStore(props.isServer, props.lastUpdate)
  // }

  // render () {
  //   return (
  //     <Provider store={this.store}>
  //       <Page title='Index Page' linkTo='/other' />
  //     </Provider>
  //   );
  // }
  //
  render() {
    console.log(initStore);
    return (
      <div>Welcome to tr8xt!</div>
    );
  }
}
