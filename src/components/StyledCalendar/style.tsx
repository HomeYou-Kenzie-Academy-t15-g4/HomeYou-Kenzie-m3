import styled from 'styled-components';

export const StyledCalendar = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    line-height: 1.125em;
    border-radius: 4px;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    margin: 1px;
    border-radius: 3px;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  abbr {
    text-decoration: none;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;    
    font-family: Montserrat;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #000000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    height: 49.73px;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
    border-radius: 50%;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #6af39fb3;
    background: #6af39fb3;
  }
  .react-calendar__tile--now {
    background: #6af39fb3;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }
  .react-calendar__tile--hasActive {
    background-color: #6af39fb3;
    background: #6af39fb3;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: #6af39fb3;
    background: #6af39fb3;
  }
  .react-calendar__tile--active {
    background: #04C35C;
    
    background-color: #0C6B38;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #0C6B38;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #04C35C;
  }
`;
