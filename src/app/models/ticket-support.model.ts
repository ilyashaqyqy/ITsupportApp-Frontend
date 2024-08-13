import { Utilisateur } from './utilisateur.model';
import { Equipement } from './equipement.model';
import { Panne } from './panne.model';
import { Technicien } from './technicien.model';
import { TicketStatus } from './ticket-status.enum';  

export interface TicketSupport {
  technicienId: any;
  id: number;
  utilisateur: Utilisateur;
  equipment: Equipement;
  panne: Panne;
  description: string;
  dateCreation: Date;
  etat: TicketStatus;
  technicienAssigne?: Technicien;
}
