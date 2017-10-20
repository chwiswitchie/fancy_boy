import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  console: {
    border: `1px solid ${colors.grey}`,
    borderRadius: 10,
    padding: 20,
  },
  header: {
    borderBottom: `1px solid ${colors.lightGrey}`,
    fontSize: 18,
    paddingBottom: 20,
  },

  noReservation: {
    textAlign: 'center',
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    padding: 20,
  },
  body: {
    fontSize: 18,
    padding: 20,
  },

});
