import { AccountEntity } from './account.entity';
import { CourseEntity } from './course.entity';
import { DetailAccountEntity } from './detailAccount.entity';
import { EnrollmentEntity } from './enrollment.entity';
import { KeyTokenEntity } from './keyToken.entity';
import { LoginHistoryEntity } from './loginHistory.entity';
import { RoleEntity } from './role.entity';
import { SessionEntity } from './session.entity';

export const entities = [
   AccountEntity,
   RoleEntity,
   SessionEntity,
   KeyTokenEntity,
   LoginHistoryEntity,
   DetailAccountEntity,
   EnrollmentEntity,
   CourseEntity,
];