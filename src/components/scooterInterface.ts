interface Scooter {
  id: string;
  assigned: boolean;
  assigned_user: string;
  decommissioned: boolean;
}

interface User {
  id: string;
  current_scooter: string;
}

interface Data {
  scooters: Scooter[];
  users: User[];
}
//only for the scooters
