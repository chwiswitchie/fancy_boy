import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  dayName: {
    alignItems: 'center',
    color: colors.primary,
    display: 'flex',
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    margin: 5,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 15,
    justifyContent: 'space-around',
  },
  icon: {
    cursor: 'pointer',
  },
  week: {
    display: 'flex',
    fontSize: 15,
    margin: 20,
  },
});
