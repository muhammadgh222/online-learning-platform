import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Course } from './course.model';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string; // Lesson content, can be video, text, etc.

  @ManyToOne(() => Course, (course) => course.lessons)
  course: Course;
}
