import { Panne } from './panne.model';
import { HistoriquePanne } from './historique-panne.model';

export interface Equipement {
  id: number;
  name: string;
  description: string;
  status: string;
  location: string;
  purchaseDate: Date;
  pannes?: Panne[];
  historiquePannes?: HistoriquePanne[];
}
