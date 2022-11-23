import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// mui
import { Box, TextField } from '@mui/material';

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

  // form
  const formValidationsSchema = yup.object().shape({
    userId: yup
      .string()
      .required('User ID is required.')
      .min(6, 'User ID must be at least 6 characters.'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid.'),
    phoneNumber: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formValidationsSchema) });

  const userModalContent = () => (
    <Box sx={modalStyles.inputFields}>
      <TextField
        placeholder='User ID'
        label='User ID'
        required
        {...register('userId')}
        error={errors.userId ? true : false}
        helperText={errors.userId?.message}
      />
      <TextField
        placeholder='Email'
        label='Email'
        required
        {...register('email')}
        error={errors.email ? true : false}
        helperText={errors.email?.message}
      />
      <TextField
        placeholder='Phone Number'
        label='Phone Number'
        required
        {...register('phoneNumber')}
        error={errors.phoneNumber ? true : false}
        helperText={errors.phoneNumber?.message}
      />
    </Box>
  );

  const addUser = data => {
    console.log(data);
  };

  return (
    <MyModal
      open={open}
      onClose={onClose}
      title='New user'
      subtitle="Fill out inputs and hit 'submit' button."
      content={userModalContent()}
      onSubmit={handleSubmit(addUser)}
    />
  );
};

export default NewUserModal;
