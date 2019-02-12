export class CalendarEvent {
    allDay?: boolean;
    description?: string;
    disabled?: boolean;
    endDate: Date;
    html?: string;
    recurrenceException?: string;
    recurrenceRule?: string;
    startDate: Date;
    template?: string;
    text: string;
    visible?: boolean;
}
