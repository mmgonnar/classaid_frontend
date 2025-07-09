'use client';

//import 'rc-calendar/assets/index.css';
//import DatePicker from 'rc-calendar/lib/Picker';
//import 'rc-calendar/assets/index.css';
//import moment from 'moment';
import 'moment/locale/es';
import { useRef, useState } from 'react';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const onSelect = (newValue) => {
    console.log('Selected Date:', newValue ? newValue.format('YYYY-MM-DD') : 'None');
    setSelectedDate(newValue);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar
        defaultValue={moment()}
        selectedValue={selectedDate}
        onSelect={onSelect}
        showToday
      />
      <h2 style={{ marginTop: '20px' }}>Component DatePicker (rc-calendar/lib/Picker)</h2>
      <DatePicker
        animation="slide-up"
        value={value}
        onChange={onSelect}
        calendar={<Calendar defaultValue={moment()} showToday />}
      >
        {({ value }) => {
          return (
            <input
              readOnly
              style={{ width: 250 }}
              value={value ? value.format('YYYY-MM-DD HH:mm:ss') : ''}
              placeholder="Por favor, selecciona una fecha y hora"
            />
          );
        }}
      </DatePicker>
    </div>
  );
}

export default Calendar;
