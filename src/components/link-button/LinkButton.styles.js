import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  link: {
    color: colors.accent,
    fontWeight: 'lighter',
    ':hover': {
      fontWeight: 'normal',
    },
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    ':hover': 'none',
  },
});
