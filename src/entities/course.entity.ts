import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './bases';
import { ICourse } from './interfaces';
import { EnrollmentEntity } from './enrollment.entity';
import { AccountEntity } from './account.entity';
import { CategoryEntity } from './category.entity';
import { CourseProgressEntity } from './progres.entity';

@Entity({ name: 'course' })
export class CourseEntity extends BaseEntity<CourseEntity> implements ICourse {
   @Index('IDX_COURSE_TITLE')
   @Column({ type: 'varchar', default: '', name: 'title' })
   title: string;

   @Column({ type: 'varchar', default: '', name: 'description' })
   description: string;

   @Column({ array: true, type: 'text', name: 'language' })
   language: string[];

   @Column({ type: 'numeric', default: 0, name: 'price' })
   price: number;

   @Column({ type: 'varchar', default: '', name: 'level' })
   level: string;

   @Column({ type: 'numeric', default: 0, name: 'discount' })
   discount: number;

   @Column({ type: 'varchar', default: '', name: 'category' })
   category: string;

   @Column({ type: 'varchar', default: '', name: 'thunbnailUrl' })
   thunbnailUrl: string;

   @OneToMany(() => EnrollmentEntity, (enrollment) => enrollment.course)
   enrollments: EnrollmentEntity[];

   @ManyToOne(() => AccountEntity, (account) => account.courses)
   instructor: AccountEntity;

   @ManyToMany(() => CategoryEntity, { cascade: true })
   @JoinTable()
   categories: CategoryEntity[];

   @OneToMany(() => CourseProgressEntity, (progres) => progres.course)
   progress: CourseProgressEntity;
}
