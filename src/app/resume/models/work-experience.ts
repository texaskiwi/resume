export class WorkExperience  {
    title?: string;
    description?: string; 
    rating?: number;
    startDate?: Date;
    endDate?: Date;

    public constructor(init?:Partial<WorkExperience>) {
        Object.assign(this, init);
    }
}