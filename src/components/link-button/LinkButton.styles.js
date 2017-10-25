import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  link: {
    color: colors.secondary,
    fontWeight: 600,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    ':hover': 'none',
  },
});
