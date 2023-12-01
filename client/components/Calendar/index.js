import React, { useState, useEffect } from 'react';

import Day from '../Day';
import Flex from '../Flex';
export default function Calendar({ calendarResponse }) {
  const [dataByDate, setDataByDate] = useState([]);
  useEffect(() => {
    if (calendarResponse && calendarResponse.timeslots) {
      // Organize data by date
      const organizedData = calendarResponse.timeslots.reduce((acc, date) => {
        const currentDate = new Date(date).toLocaleDateString();
        if (!acc[currentDate]) {
          acc[currentDate] = [];
        }
        acc[currentDate].push(date);
        return acc;
      }, {});

      // Convert object to array
      const dataArray = Object.values(organizedData);

      setDataByDate(dataArray.slice(3));
    }
  }, [calendarResponse]);
  return (
    <Flex justifyCenter>
    {dataByDate.map((dateData, index) => (
      <Day key={index} date={dateData[0]} timeSlots={dateData} />
    ))}
  </Flex>
  );
}
