import { Equipement } from './equipement.model';
import { HistoriquePanne } from './historique-panne.model';
import { TicketSupport } from './ticket-support.model';

export interface Panne {
  id: number;
  equipment: Equipement;
  description: string;
  reportDate: Date;
  repairDate: Date;
  status: string;
  historiquePannes?: HistoriquePanne[];
  ticketSupports?: TicketSupport[];
}
