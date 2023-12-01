import React, { useState, useEffect } from 'react';

import Calendar from './components/Calendar';
import { StyledCalendarWrapper } from './components/Calendar/Calendar.styles';
import Flex from './components/Flex';
import Header from './components/Header';
import MixmaxUpsell from './components/MixmaxUpsell';

const App = function () {
  const [calendarResponse, setCalendarResponse] = useState(null);
  const [userId] = useState('engtestuser1'); // Hardcoded userId, for now.

  const url = `/api/calendar?hostUserId=${userId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setCalendarResponse(responseData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [url]); // De

  if (!calendarResponse) {
    return (
      <Flex padding='16px' column alignCenter>
        Loading...
      </Flex>
    );
  }
  console.log('App - Rendering Calendar');

  return (
    <Flex padding='16px' column alignCenter>
      <Header calendarName={calendarResponse.name} />
      <StyledCalendarWrapper>
        <Calendar calendarResponse={calendarResponse}/>
        <Flex justifyEnd style={{marginRight:"7px"}}>
          <MixmaxUpsell />
        </Flex>
      </StyledCalendarWrapper>
    </Flex>
  );
};

export default App;
