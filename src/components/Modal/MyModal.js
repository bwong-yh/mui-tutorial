import { Box, Modal, Typography } from '@mui/material';

// components
import MyButton from '../Button/MyButton';

const modalStyles = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  },
  inputFields: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '15px',
    '.MuiInput-root': {
      marginBottom: '20px',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'end',
  },
};

const MyModal = ({ open, onClose, title, subtitle, content }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{subtitle}</Typography>
        <Typography>{content}</Typography>

        <Box sx={modalStyles.buttons}>
          <MyButton variant='contained'>Add</MyButton>
          <MyButton variant='text' onClick={onClose}>
            Cancel
          </MyButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default MyModal;
