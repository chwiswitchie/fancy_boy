import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  button: {
    cursor: 'pointer',
    // height: 36,
    fontSize: 16,
    margin: 5,
    whiteSpace: 'nowrap',
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
      backgroundColor: colors.primaryShade,
      border: `1px solid ${colors.primaryShade}`,
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
      color: colors.primaryShade,
      textDecoration: 'underline',
    },
  },

});
