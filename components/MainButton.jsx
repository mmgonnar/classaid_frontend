'use client';

function MainButton({
  variant = 'primary',
  text = '',
  type = 'button',
  onClick = () => {},
  size = 'md',
}) {
  //const { variant = 'primary', text = '', link } = props;

  const variants = {
    primary:
      'bg-primary cursor-pointer rounded-full py-1 font-bold text-white shadow-lg hover:bg-blue-800',
    secondary:
      'text-primary hover:bg-primary border-primary cursor-pointer rounded-full border bg-transparent px-4 py-1 font-bold shadow-lg hover:border-transparent hover:text-white',
    destructive:
      'bg-primary hover:border-primary hover:text-primary cursor-pointer rounded-full px-4 py-1 font-bold text-white shadow-lg hover:border hover:bg-transparent',
    fullWidth:
      'bg-primary w-full rounded-full py-1 text-center text-sm font-medium text-white hover:bg-blue-800 cursor-pointer',
  };
  const sizes = {
    xs: 'w-[80px]',
    sm: 'w-[100px]',
    md: 'w-[150px]',
    lg: 'w-[200px]',
  };

  return (
    <button
      type={type}
      className={`${variants[variant]} ${size ? sizes[size] : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export function ButtonSection() {
  return (
    <section className="flex flex-col gap-1">
      <MainButton variant="primary" text="Example" size="md" />
      <MainButton variant="secondary" text="Example" size="sm" />
      <MainButton variant="destructive" text="Example" size="sm" />
      <MainButton variant="fullWidth" text="Example" />
    </section>
  );
}

export default MainButton;
