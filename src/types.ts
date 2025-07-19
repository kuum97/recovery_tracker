export interface UserRecord {
  id: string;
  createdAt: string;
  text: string;
  emotion?: string | null;
  action?: string | null;
  isRecoveryPoint?: boolean;
}
