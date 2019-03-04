import { Exam } from './exam.model';

export class Course {
    id: number;
    name: string;
    description?: string;
    finalGrade?: number;
    qualified: boolean;
    submittedTasks: any[];
    semesterId: number;

    courseExams: Exam[];
}
