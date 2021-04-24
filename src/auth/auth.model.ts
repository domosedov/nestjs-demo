import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {}
export class AuthModel extends TimeStamps implements Base {
  @prop({
    unique: true,
  })
  email: string;

  @prop()
  passwordHash: string;
}
