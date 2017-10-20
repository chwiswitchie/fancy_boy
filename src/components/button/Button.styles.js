import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  button: {
    cursor: 'pointer',
    // height: 36,
    fontSize: 16,
    margin: 5,
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    ':hover': 'none',
  },

  primary: {
    backgroundColor: colors.primary,
    color: colors.white,
    border: `1px solid ${colors.primary}`,
    borderRadius: 3,
    padding: '8px 16px',
    ':hover': {
      backgroundColor: colors.secondary,
      border: `1px solid ${colors.secondary}`,
    },
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.primary,
    border: `1px solid ${colors.primary}`,
    borderRadius: 3,
    padding: '8px 16px',
    ':hover': {
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  text: {
    backgroundColor: colors.white,
    border: 'none',
    color: colors.primary,
    padding: '8px 16px',
    ':hover': {
      color: colors.secondary,
      textDecoration: 'underline',
    },
  },

});
