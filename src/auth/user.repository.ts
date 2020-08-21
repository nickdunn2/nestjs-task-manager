import { EntityRepository, Repository } from 'typeorm/index'
import { User } from './user.entity'
import { AuthCredentialsDto } from './dto/auth-credentials.dto'
import { DUPLICATE_KEY_VALUE_ERROR } from './user.utility'
import { ConflictException, InternalServerErrorException } from '@nestjs/common'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto

    const user = new User()
    user.username = username
    user.password = password

    try {
      await user.save()
    } catch (error) {
      if (error.code === DUPLICATE_KEY_VALUE_ERROR) {
        throw new ConflictException('Username already exists')
      } else {
        throw new InternalServerErrorException()
      }
    }
  }
}