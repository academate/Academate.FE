import { Exam } from './exam.model';

export class Course {
    courseId: number;
    enrollmentId: number;
    title: string;
    finalGrade?: number;
    qualified: boolean;
    semesterId: number;

    courseExams: Exam[];
}
