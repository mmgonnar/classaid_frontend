'use client';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function EditButton({ className = '', size, onClick = () => {} }) {
  const sizes = {
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
  };

  const handleClick = () => {
    onClick();
  };
  return (
    <>
      <EditRoundedIcon
        onClick={handleClick}
        className={`text-primary cursor-pointer ${className}`}
        sx={{ fontSize: sizes[size] || sizes.medium }}
      />
    </>
  );
}

export default EditButton;
