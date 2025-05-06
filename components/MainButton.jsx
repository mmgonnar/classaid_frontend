'use client';

function MainButton({ variant = 'primary', text = '', link, type }) {
  //const { variant = 'primary', text = '', link } = props;

  const variants = {
    primary:
      'bg-primary w-[150px] cursor-pointer rounded-full py-1 font-bold text-white shadow-lg hover:bg-blue-800',
    secondary:
      'text-primary hover:bg-primary border-primary w-[150px] cursor-pointer rounded-full border bg-transparent px-4 py-1 font-bold shadow-lg hover:border-transparent hover:text-white',
    destructive:
      'bg-primary hover:border-primary hover:text-primary w-[150px] cursor-pointer rounded-full px-4 py-1 font-bold text-white shadow-lg hover:border hover:bg-transparent',
    fullWidth:
      'bg-primary w-full rounded-full py-1 text-center text-sm font-medium text-white hover:bg-blue-800 cursor-pointer',
  };

  return <button className={`${variants[variant]}`}>{text}</button>;
}

export function ButtonSection() {
  return (
    <section className="flex-col gap-1">
      <MainButton variant="primary" text="Example" />
      <MainButton variant="secondary" text="Example" />
      <MainButton variant="destructive" text="Example" />
      <MainButton variant="fullWidth" text="Example" />
    </section>
  );
}

export default MainButton;
