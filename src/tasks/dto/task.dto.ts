import { TaskStatus } from '../task.entity';

export class createTaskDto {
  title: string;
  description: string;
}

export class updateClassDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
