import {loadData} from './dataComponent';
export const processScooters = (): Data => {
  const data = loadData();
  console.log('Original data:', JSON.stringify(data, null, 2));

  // Remove scooters that are not assigned and decommissioned
  data.scooters = data.scooters.filter(scooter => !(scooter.decommissioned && !scooter.assigned));
  console.log(
    'After removing decommissioned and unassigned scooters:',
    JSON.stringify(data, null, 2),
  );

  const unassignedUsers = data.users.filter(user => !user.current_scooter);
  const availableScooters = data.scooters.filter(
    scooter => !scooter.assigned && !scooter.decommissioned,
  );

  unassignedUsers.forEach((user, index) => {
    if (availableScooters[index]) {
      user.current_scooter = availableScooters[index].id;
      availableScooters[index].assigned = true;
      availableScooters[index].assigned_user = user.id;
    }
  });
  console.log(
    'After assigning available scooters to unassigned users:',
    JSON.stringify(data, null, 2),
  );
  return data;
};
