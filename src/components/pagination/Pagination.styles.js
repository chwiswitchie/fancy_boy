import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  button: {
    color: colors.primary,
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
      color: colors.seconday,
    },
  },
  hidden: {
    visibility: 'hidden',
  },
  label: {
    margin: '0 5px',
  },
  pagination: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 14,
    height: 30,
    justifyContent: 'space-between',
  },
});
