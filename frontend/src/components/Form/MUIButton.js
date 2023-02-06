import { Button } from '@mui/material';

function MUIButton({ id, label, ...rest }) {
  return (
    <Button
      sx={{ mt: 1 }}
      variant="contained"
      type="submit"
      color="primary"
      fullWidth
    >
      {label}
    </Button>
  );
}

export default MUIButton;
