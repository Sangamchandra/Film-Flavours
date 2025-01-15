// eslint-disable-next-line
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: { padding: '10px' },
  links: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {
    borderRadius: '20px',
    height: '260px',
    padding: '5px',
    marginBottom: '5px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
}));
