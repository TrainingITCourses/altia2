export interface Auth {
  sessionToken: string;
  user?: { email: string };
  accessError?: boolean;
}
