import { StyleSheet } from 'aphrodite';
import colors from '../../lib/styles/colors.js';

export default StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 350,
  },
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
  hidden: {
    visibility: 'hidden',
  },
  carets: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 18px',
    minWidth: 350,
  },
  caret: {
    width: 0,
    height: 0,
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderBottom: `15px solid ${colors.grey}`,
    position: 'relative',
  },
  innerCaret: {
    width: 0,
    height: 0,
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderBottom: `15px solid ${colors.white}`,
    position: 'absolute',
    top: 2,
    left: -15,
  },
  noSchedule: {
    textAlign: 'center',
  },
  title: {
    color: colors.secondary,
    fontSize: 24,
    padding: 20,
  },
  body: {
    fontSize: 18,
    padding: 20,
  },
});
