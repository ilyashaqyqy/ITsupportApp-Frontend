import { TicketSupport } from './ticket-support.model';
import { Role } from './admin.model';  // Reuse Role enum from admin.model.ts

export interface Technicien {
  id: number;
  username: string;
  password: string;
  email: string;
  role: Role;
  specialisation: string;
  tickets?: TicketSupport[];
}
