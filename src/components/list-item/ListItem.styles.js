import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  content: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
  },
  info: {
    fontSize: 14,
  },
  listItem: {
    alignItems: 'center',
    borderBottom: `1px solid ${colors.lightGrey}`,
    display: 'flex',
    height: 100,
    width: '100%',
  },
  thumbnail: {
    minHeight: 80,
    margin: 15,
    width: 80,
  },
  website: {
    fontSize: 12,
    color: colors.grey,
    textDecoration: 'none',
    ':hover': {
      color: colors.tertiary,
    },
  },
});
