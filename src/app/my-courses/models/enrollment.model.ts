export class Enrollment {
    id: number;
    courseId: number;
    title: string;
    finalGrade?: number;
    status: string;
    qualified: boolean;
    submittedTasks: any[];
}
