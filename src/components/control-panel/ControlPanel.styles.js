import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  avatar: {
    height: 100,
    width: 100,
    borderRadius: '50%',
    margin: '0 20px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: -18,
    minWidth: 350,
    alignItems: 'center',
  },
  panel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    color: colors.secondary,
  },
  size: {
    color: colors.quarternary,
  },
  type: {
    fontWeight: 'lighter',
    fontSize: 12,
  },
  userInfo: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    minWidth: 350,
  },  
});
