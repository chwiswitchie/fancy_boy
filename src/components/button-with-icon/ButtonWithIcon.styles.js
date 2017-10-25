import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  button: {
    cursor: 'pointer',
    fontSize: 16,
    margin: 5,
    backgroundColor: colors.secondary,
    color: colors.white,
    border: `1px solid ${colors.secondary}`,
    borderRadius: 3,
    padding: '8px 16px',
    whiteSpace: 'nowrap',
    ':hover': {
      backgroundColor: colors.secondaryShade,
      border: `1px solid ${colors.secondaryShade}`,
    },
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    ':hover': 'none',
  },
  label: {
    marginLeft: 10,
  },

});
