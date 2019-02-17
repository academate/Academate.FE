export function getDateByStartDateAndDuration(startDate: Date, duration: number): Date {
    const newDate = new Date(startDate);
    newDate.setMinutes(startDate.getMinutes() + duration);
    return newDate;
  }
