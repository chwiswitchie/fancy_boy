import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  button: {
    cursor: 'pointer',
    fontSize: 16,
    margin: 5,
    backgroundColor: colors.accent,
    color: colors.white,
    border: `1px solid ${colors.accent}`,
    borderRadius: 3,
    padding: '8px 16px',
    ':hover': {
      backgroundColor: colors.accent,
      border: `1px solid ${colors.accent}`,
    },
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    ':hover': 'none',
  },
  label: {
    marginLeft: 5,
  },

});
