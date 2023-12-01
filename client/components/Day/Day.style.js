import styled from 'styled-components';

export const StyledDayWrapper = styled.div`
  background: #3482d0;
  border-radius: 4px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  color: white;
  font-size: 13px;
  text-align: center;
  width: 100%;
  margin:0px 7px 5px 0px;
  transition: background 0.3s ease; /* Add transition property for smooth background transition */
  &:hover {
    background: rgb(30, 79, 128);
  }
`;