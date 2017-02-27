import {receiveForecast} from './actions/FetchData';

const getTime = (dispatch, data) => {
  console.log('run get time');
  let i=0;
  data.forEach((t)=>{
    let timeStr = addDays(i++);
    t.time = {
      day: timeStr.slice(0,3),
      dateMonth: timeStr.slice(4)
    }
  });
  dispatch(receiveForecast(data));
}

function addDays(numDays) {
  let dateObj = new Date();
  dateObj.setDate(dateObj.getDate()+numDays);
  let month = dateObj. getMonth()+1;
  month = (month<10)?'0'+month:month.toString();
  let timeStr = dateObj.toDateString('dd-mm-yy');
  let dateMonth = timeStr.slice(8,10).concat('/',month);
  return timeStr.slice(0,3).concat(' ',dateMonth);
}

export default getTime;