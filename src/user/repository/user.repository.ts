import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Repository } from 'typeorm';

import User from '../entity/user.entity';

@CustomRepository(User)
class UserRepository extends Repository<User> {}

export default UserRepository;
