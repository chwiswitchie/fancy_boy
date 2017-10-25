import React, { Component } from 'react';
import Pagination from '../pagination/Pagination.js';

class PaginationPage extends Component {

  state = {
    limit: 10,
    start: 0,
    totalResults: 103,
  };

  render() {
    return (
      <div>
        <h1>PaginationPage</h1>
        <Pagination
          limit={this.state.limit}
          start={this.state.start}
          totalResults={this.state.totalResults}
        />
      </div>
    );
  }
}

export default PaginationPage;
