import React from 'react';
import {Formio} from 'react-formio';

export default class FormioNoSSR extends React.Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({mounted: true});
  }

  render() {
    console.log(this.props);
    if (this.state.mounted === true) return <Formio {...this.props} />;
    return null;
  }
}
