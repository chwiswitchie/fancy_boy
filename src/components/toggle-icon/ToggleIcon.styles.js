import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
    ':hover': 'none',
  },
  icon: {
    cursor: 'pointer',
    fontSize: 24,
    color: colors.grey,
    background: 'none',
    border: 'none',
    margin: 12,
    ':hover': {
      color: colors.black,
    },
  },
  isActive: {
    color: colors.accent,
    ':hover': 'none',
  },
});
