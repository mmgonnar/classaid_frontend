'use client';

import AddRoundedIcon from '@mui/icons-material/AddRounded';

function AddButton({ className = '', onClick = () => {}, size }) {
  const sizes = {
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
  };
  return (
    <>
      <AddRoundedIcon
        onClick={onClick}
        sx={{ fontSize: sizes[size] || sizes.medium }}
        className={`text-primary w-[98%] cursor-pointer text-5xl ${className}`}
      />
    </>
  );
}

export default AddButton;
