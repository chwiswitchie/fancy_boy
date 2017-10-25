import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  day: {
    alignItems: 'center',
    borderWidth: 2,
    color: colors.black,
    cursor: 'pointer',
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    margin: 5,
    width: '100%',
  },
  hasPendingEvent: {
    border: `2px dashed ${colors.primary}`,
    borderRadius: '50%',
    padding: 5,
  },
  hasSchedEvent: {
    border: `2px solid ${colors.primary}`,
    borderRadius: '50%',
    padding: 5,
  },
  isToday: {
    fontWeight: 'bold'
  },
  number: {
    height: 18,
    textAlign: 'center',
    width: 18,
  },
  pastDate: {
    opacity: 0.5,
  },
  selectedDay: {
    backgroundColor: colors.primary,
    border: `2px solid ${colors.primary}`,
    borderRadius: '50%',
    color: colors.white,
    padding: 5,
  },
  pastIsReadOnly: {
    cursor: 'not-allowed',
  },
});
