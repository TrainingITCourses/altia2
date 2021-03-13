import { Err } from './err';

export interface Audit {
  loading: boolean;
  error: Err | null;
}
