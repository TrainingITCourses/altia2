import { HeaderTitle } from './header-title';

export interface Card {
  title: HeaderTitle;
  description?: string;
  footer?: string;
}
