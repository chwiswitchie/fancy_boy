import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  footer: {
    bottom: 0,
    position: 'absolute',
    paddingBottom: 10,
    width: '100%',
    fontSize: 12,
    justifyContent: 'center',
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',

  },
  text: {
    color: colors.grey,
    textDecoration: 'none',
    margin: 2,
  },
});
