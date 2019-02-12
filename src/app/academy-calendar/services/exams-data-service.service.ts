import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CalendarEvent } from '../models/calendar-event.model';

const exams: CalendarEvent[] = [
    {
        text: 'Math Exam',
        startDate: new Date(2019, 1, 24, 9, 30),
        endDate: new Date(2019, 1, 24, 11, 30)
    }, {
        text: 'Physics Exam',
        startDate: new Date(2019, 1, 24, 12, 0),
        endDate: new Date(2019, 1, 24, 13, 0),
    }, {
        text: 'CS Exam - Chap 1',
        startDate: new Date(2019, 1, 25, 12, 30),
        endDate: new Date(2019, 1, 25, 15, 30)
    }, {
        text: 'Algorithems Exam',
        startDate: new Date(2019, 1, 25, 9, 30),
        endDate: new Date(2019, 1, 25, 11, 30)
    }, {
        text: 'English Exam',
        startDate: new Date(2019, 1, 26, 9, 30),
        endDate: new Date(2019, 1, 26, 11, 30),
        description: 'Some desc goes here'
    }

];


@Injectable({
    providedIn: 'root'
})
export class ExamsDataServiceService {

    constructor() { }

    getExams(): Observable<any> {
        return of(exams);
    }
}
