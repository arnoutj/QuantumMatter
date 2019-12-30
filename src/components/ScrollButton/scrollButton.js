import React from 'react';
import ArrowUp from '../../assets/svg/arrow-up.svg';

import './scrollButton.scss';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      disabled: false,
      intervalId: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({ visible: document.body.scrollHeight > document.body.clientHeight });
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    this.setState({ disabled: window.pageYOffset === 0});
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return this.state.visible ? (
      <div className={`scroll-button ${this.state.disabled ? 'disabled' : ''}`}>
        <button
          title="Back to top"
          className="btn"
          onClick={() => {
            this.scrollToTop();
          }}
        >
          <ArrowUp />
        </button>
      </div>
    ) : null;
  }
}

export default ScrollButton;
