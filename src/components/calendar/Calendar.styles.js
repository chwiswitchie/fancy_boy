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
    width: '100%',
  },
  calendar: {
    width: '100%',
    minWidth: 350,
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 15,
    justifyContent: 'space-around',
  },
  icon: {
    cursor: 'pointer',
    color: colors.secondary,
    ':hover': {
      color: colors.secondaryShade,
    },
  },
  week: {
    display: 'flex',
    fontSize: 15,
  },

  // pastIsReadOnly styling

  headerSpacing: {
    margin: 15,
  },
  hidden: {
    visibility: 'hidden',
  },
  weekSpacing: {
    margin: 25,
  },
});
