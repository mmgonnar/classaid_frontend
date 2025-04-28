'use client';

function MainButton(props) {
  const { variant = 'primary', text = '', link } = props;

  const variants = {
    primary:
      'bg-primary w-[150px] cursor-pointer rounded-full py-1 font-bold text-white shadow-lg hover:bg-blue-800',
    secondary:
      'text-primary hover:bg-primary border-primary w-[150px] cursor-pointer rounded-full border bg-transparent px-4 py-1 font-bold shadow-lg hover:border-transparent hover:text-white',
    destructive:
      'bg-primary hover:border-primary hover:text-primary w-[150px] cursor-pointer rounded-full px-4 py-1 font-bold text-white shadow-lg hover:border hover:bg-transparent',
  };

  return <button className={`${variants[variant]}`}>{text}</button>;
}

export function ButtonSection() {
  return (
    <section className="flex-col gap-1">
      <MainButton variant="primary" text="Example" />
      <MainButton variant="secondary" text="Example" />
      <MainButton variant="destructive" text="Example" />
    </section>
  );
}

export default MainButton;
