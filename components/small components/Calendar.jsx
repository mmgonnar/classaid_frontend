'use client';

import 'cally/cally.min.js';
import { useRef, useState } from 'react';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const calendarRef = useRef(null);
  return (
    <div>
      <calendar-date ref={calendarRef}></calendar-date>
    </div>
  );
}

export default Calendar;
