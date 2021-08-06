import React from 'react';
import { Calendar } from 'react-native-calendars';

const BatchesCalendar: React.FC = () => {
  return (
    <Calendar
      markingType='multi-period'
      markedDates={{
        '2021-08-01': {
          periods: [{ startingDay: true, endingDay: false, color: '#f0e68c' }],
        },
        '2021-08-02': {
          periods: [{ startingDay: false, endingDay: false, color: '#f0e68c' }],
        },
      }}
    />
  );
};

export default BatchesCalendar;
