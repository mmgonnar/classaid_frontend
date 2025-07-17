'use client';

import { useState } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function Calendar() {
  const [selected, setSelected] = useState();

  const handleDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dayToEvaluate = new Date(date);
    dayToEvaluate.setHours(0, 0, 0, 0);

    return dayToEvaluate < today;
  };

  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="flex justify-center p-1">
      <DayPicker
        animate
        mode="single"
        selected={selected}
        onSelect={setSelected}
        disabled={handleDate}
        navLayout="around"
        classNames={{
          today: `outline-2 outline-[#1E3A8A] rounded-full font-medium text-[#1E3A8A] -outline-offset-6 ${selected ? 'outline-none' : 'outline-2 '}`,
          chevron: ` fill-[#1E3A8A]`,
          selected: `bg-[#1E3A8A] text-white rounded-full`,
        }}
      />
    </div>
  );
}

export default Calendar;
