import { Equipement } from './equipement.model';
import { Panne } from './panne.model';

export interface HistoriquePanne {
  id: number;
  equipment: Equipement;
  panne: Panne;
  reportDate: Date;
  repairDate: Date;
  status: string;
}
