import { Card, CardContent } from '@mui/material';

const MyCard = ({ header, content }) => {
  const cardStyles = {
    width: '1050px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '8px',
  };

  return (
    <Card sx={cardStyles}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default MyCard;
