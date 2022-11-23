import { Box, Input } from '@mui/material';
// components
import MyModal from './MyModal';

const NewUserModal = ({ open, onClose }) => {
  const modalStyles = {
    inputFields: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '20px',
      marginBottom: '15px',
      '.MuiInput-root': {
        marginBottom: '20px',
      },
    },
  };

  const userModalContent = () => (
    <Box sx={modalStyles.inputFields}>
      <Input placeholder='E-mail' />
      <Input placeholder='Phone number' />
      <Input placeholder='User id' />
    </Box>
  );

  return (
    <MyModal
      open={open}
      onClose={onClose}
      title='New user'
      subtitle="Fill out inputs and hit 'submit' button."
      content={userModalContent()}
    />
  );
};

export default NewUserModal;
