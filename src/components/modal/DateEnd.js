import React from 'react'
import { Calendar } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"




function DateEnd({ data }) {
  const { values, changeHandler } = data


  return (
    <div>


      <Calendar
        format="MM/DD/YYYY HH:mm:ss"
        plugins={[
          <TimePicker position="bottom" />
        ]}
        value={values.dateShow}
        onChange={(event) => changeHandler(event, 'date')}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />




    </div>
  )
}

export default DateEnd

