import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import {Formio} from 'react-formio';
import Loader from './Loader.js';

export default class FormIoWrapper extends React.Component {
  static getInitialProps({req}) {
    const isServer = !!req;
    return {isServer};
  }

  constructor(props) {
    super(props);
    //When the form is submitted, the form's src md5 hash is stored in the browser's localstorage
    //to detect if the user previously submitted the same form. NOTE since we are doinf SSR, the
    //window object existence is tested first.
    const srcMd5 = md5(props.src);
    const submitted =
      typeof window !== 'undefined'
        ? !!window.localStorage.getItem(srcMd5)
        : false;
    this.state = {
      loaded: submitted,
      submitted,
    };
  }

  static propTypes = {
    src: PropTypes.string.isRequired,
    successMessage: PropTypes.string,
  };

  static defaultProps = {
    successMessage: 'Submission sent',
  };

  handleFormLoad = () => {
    this.setState({loaded: true});
  };

  handleFormSubmit = () => {
    window.localStorage.setItem(md5(this.props.src), true);
    this.setState({submitted: true});
  };

  render() {
    const {loaded, submitted} = this.state;
    const {src, successMessage, isServer} = this.props;
    const loader =
      loaded === false && isServer === false ? (
        <Loader characters="⣾⣽⣻⢿⡿⣟⣯⣷" />
      ) : null;

    const form =
      submitted === false && isServer === false ? (
        <Formio
          src={src}
          onRender={this.handleFormLoad}
          onSubmitDone={this.handleFormSubmit}
        />
      ) : (
        <div className="alert-success">{successMessage}</div>
      );

    return (
      <div>
        {loader}
        {form}
        <p className="text-right text-small">
          Powered by
          <a href="https://form.io" rel="noopener noreferrer" target="_blank">
            {' <form.io>'}
          </a>
        </p>
      </div>
    );
  }
}
