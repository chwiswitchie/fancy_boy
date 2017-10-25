import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    border: `1px solid ${colors.lightGrey}`,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTop: 'none',
    padding: '10px 10px 0 10px',
    position: 'absolute',
    width: 350,
  },
  icon: {
    color: colors.secondary,
  },
  select: {
    alignItems: 'center',
    backgroundColor: colors.white,
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: 0,
    cursor: 'pointer',
    display: 'flex',
    fontSize: 14,
    height: 38,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    width: 350,
  },
});
