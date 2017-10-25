import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: 250,
  },
  icon: {
    color: colors.secondary,
    fontSize: 14,
    position: 'absolute',
    right: 10,
    top: 9,
    zIndex: -1,
  },
  select: {
    '-webkit-appearance': 'none',
    backgroundColor: 'transparent',
    borderColor: colors.lightGrey,
    borderRadius: 0,
    cursor: 'pointer',
    fontSize: 14,
    height: 40,
    paddingLeft: 10,
    width: 250,
  },
});
