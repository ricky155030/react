'use strict';

import React, { PropTypes } from 'react';
var hljs = window.hljs;

class CodeBlock extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
    hljs.highlightBlock(this.refs.code);
  }

  render() {
    return (
      <pre>
        <code
          ref="code"
          className={this.props.language}
          style={{ borderRadius: '5px' }}
        >
          {this.props.literal}
        </code>
      </pre>
    );
  }
};

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string
}

export default CodeBlock
