'use client';

import { classFormInput } from '@/utils/constants';

function ClassForm() {
  return (
    <form action="submit" noValidate className="flex flex-col gap-2">
      {classFormInput.map((item) => (
        <div key={item.id}>
          <input
            type={item.type}
            name={item.name}
            id={item.id}
            placeholder={item.placeholder}
            className=""
          />
        </div>
      ))}
    </form>
  );
}

export default ClassForm;
