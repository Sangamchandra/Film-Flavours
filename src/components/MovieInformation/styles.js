// eslint-disable-next-line
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  poster: {
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64,64,70)',
    width: '80%',
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto',
      width: '50%',
      // height: '350px',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '50%',
      // height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: '350px',
      marginBottom: '30px',
    },
  },
  genresContainer: {
    margin: '10px 0px !important',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: '50px',
    padding: '3px 10px',
    boxShadow: '0.1em 0.1em 0.5em grey',
    background: 'black',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1rem',
    },
  },
  castImage: {
    width: '100%',
    maxWidth: '7em',
    height: '8em',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '50%',
    height: '50%',
    [theme.breakpoints.down('s')]: {
      height: '90%',
      width: '90%',
    },
  },
}));
