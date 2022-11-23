import { Button } from '@mui/material';

const MyButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
  onClick,
}) => {
  return (
    <Button
      variant={variant || 'outlined'}
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MyButton;
