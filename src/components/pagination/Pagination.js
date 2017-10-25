import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Pagination.styles';

class Pagination extends Component {
  static propTypes = {
    limit: PropTypes.number,
    onPageChange: PropTypes.func,
    start: PropTypes.number,
    totalResults: PropTypes.number,
  };

  static defaultProps = {};

  render() {
    const { limit, onPageChange, start, totalResults } = this.props;
    const totalPages = Math.ceil(totalResults / limit);
    const currentPage = start / limit + 1;

    return (
      <div className={css(styles.pagination)}>
        <div
          className={css(
            styles.button,
            currentPage === 1 && styles.hidden,
          )}
        >
          <div
            onClick={() => onPageChange(start - limit)}
            className={css(styles.label)}
          >
           « Previous
          </div>
        </div>
        {currentPage} of {totalPages} page{totalPages > 1 && 's'}
        <div
          className={css(
            styles.button,
            currentPage === totalPages && styles.hidden,
          )}
        >
          <div
            onClick={() => onPageChange(start + limit)}
            className={css(styles.label)}
          >
            Next »
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
