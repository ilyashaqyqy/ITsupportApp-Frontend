export interface Admin {
    id: number;
    username: string;
    password: string;
    email: string;
    role: Role;
  }
  
  export enum Role {
    ROLE_USER = 'ROLE_USER',
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_TECHNICIEN = 'ROLE_TECHNICIEN',
  }
  