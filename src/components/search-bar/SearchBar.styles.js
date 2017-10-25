import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    border: `1px solid ${colors.secondary}`,
    borderRadius: 3,
    color: colors.white,
    cursor: 'pointer',
    fontSize: 14,
    height: 40,
    marginLeft: 5,
    padding: '0 10px',
    whiteSpace: 'nowrap',
    ':hover': {
      backgroundColor: colors.secondaryShade,
      border: `1px solid ${colors.secondaryShade}`,
    },
  },
  container: {
    alignItems: 'baseline',
    display: 'flex',
    // margin: '10px 0',
  },
  label: {
    marginLeft: 10,
  },
});
