<template>
  <div>
    <ScheduleXCalendar :calendar-app="calendarApp" />
  </div>
</template>

<script setup>
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  viewDay,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
const today = new Date().toISOString().slice(0, 10)
// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
  selectedDate: '2023-12-19',
  views: [viewMonthGrid],
  datePicker: {
    selectedDate: today
  },
  events: [
    {
      id: 1,
      title: 'Event 1',
      start: '2023-12-19',
      end: '2023-12-19'
    },
    {
      id: 2,
      title: 'Event 2',
      start: '2023-12-20 12:00',
      end: '2023-12-20 13:00'
    }
  ],
  calendars: {
    leisure: {
      colorName: "leisure",
      lightColors: {
        main: "#F58A07",
        container: "#F58A07",
        onContainer: "#F58A07",
      },
      darkColors: {
        main: "#F58A07",
        onContainer: "#F58A07",
        container: "#F58A07",
      },
    },
  },
})
</script>
