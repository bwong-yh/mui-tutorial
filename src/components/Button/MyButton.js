import { Button } from '@mui/material';

const MyButton = ({ children, color, disabled, size, sx, variant }) => {
  return (
    <Button
      variant={variant || 'outlined'}
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default MyButton;
