import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  button: {
    color: colors.white,
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: 24,
    height: 56,
    margin: 5,
    width: 56,
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
    ':hover': 'none',
  },
  primary: {
    backgroundColor: colors.primary,
    ':hover': {
      backgroundColor: colors.primaryShade,
    },
  },
  secondary: {
    backgroundColor: colors.secondary,
    ':hover': {
      backgroundColor: colors.secondaryShade,
    },
  },
  tertiary: {
    backgroundColor: colors.tertiary,
    ':hover': {
      backgroundColor: colors.tertiaryShade,
    },
  },
  quarternary: {
    backgroundColor: colors.quarternary,
    ':hover': {
      backgroundColor: colors.quarternaryShade,
    },
  },
});
