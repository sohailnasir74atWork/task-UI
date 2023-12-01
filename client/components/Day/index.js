import React from 'react';
import Flex, { FlexItem } from '../Flex';
import Typography from '../Typography';
import { StyledDayWrapper } from './Day.style';
export default function Day({ timeSlots }) {
  if (!timeSlots || timeSlots.length === 0) {
    return null; // Handle empty time slots
  }

  // Extract day name and date from the first time slot
  const firstTimeSlot = new Date(timeSlots[0]);
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(firstTimeSlot).slice(0, 3);
  const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(firstTimeSlot);

  return (
    <FlexItem six>
      <Flex margin='0 0 10px' alignCenter>
        <Typography margin='0 5px 0 0' style={{ fontWeight: 500, fontSize:14 }}>
          {dayName}
        </Typography>
        <Typography margin='0' style={{ color: '#8a8a9e', fontSize:14 }}>
          {formattedDate}
        </Typography>
      </Flex>
      <Flex>
        {timeSlots.map((slot, index) => {
          console.log(slot)
          const startTime = new Date(slot).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          });

          const endTime = new Date(new Date(slot).setHours(new Date(slot).getHours() + 1)).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          });

          return (
            <StyledDayWrapper key={index}>
              {startTime.toLowerCase()} – {endTime.toLowerCase()}
            </StyledDayWrapper>
          );
        })}
      </Flex>
    </FlexItem>
  );
}