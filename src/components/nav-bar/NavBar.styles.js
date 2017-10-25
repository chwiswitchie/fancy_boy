import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  navBar: {
    alignContent: 'center',
    backgroundColor: colors.primary,
    borderBottom: `1px solid ${colors.primaryShade}`,
    display: 'flex',
    height: 42,
    padding: '0 20px',
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
  },
  icon: {
    color: colors.white,
    fontSize: 36,
  },
});
