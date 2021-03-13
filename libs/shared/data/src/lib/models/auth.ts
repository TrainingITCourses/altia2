import { Err } from './err';
import { User } from './user';

export interface Auth {
  sessionToken: string;
  user: User | null;
  accessError: Err | null;
}
