import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  checkbox: {
    border: `1px solid ${colors.grey}`,
    borderRadius: 3,
    height: 16,
    marginRight: 5,
    width: 16,
  },
  checked: {
    backgroundColor: colors.accent,
    border: `1px solid ${colors.accent}`,
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontSize: 16,
    fontWeight: 'lighter',
    margin: 5,
    ':hover': {
      textDecoration: 'underline',
    },
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
    ':hover': 'none',
  },
});
