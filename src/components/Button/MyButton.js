import { Button } from '@mui/material';

const MyButton = ({ children, color, size, sx, variant, onClick }) => {
  return (
    <Button variant={variant} size={size} sx={sx} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MyButton;
