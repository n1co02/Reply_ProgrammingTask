import {processScooters} from '../components/processComponent';
import {saveData, loadData} from '../components/dataComponent';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(__dirname, '../database/data.json');

jest.mock('fs');

describe('processScooters', () => {
  beforeEach(() => {
    (fs.readFileSync as jest.Mock).mockReturnValue(
      JSON.stringify({
        scooters: [
          {
            id: '45601e30-01af-4dd9-9575-78661cf2a398',
            assigned: true,
            assigned_user: 'user2',
            decommissioned: false,
          },
          {
            id: 'dacc2b76-57be-4fc5-8d02-36c7e43b6e0f',
            assigned: false,
            assigned_user: '',
            decommissioned: true,
          },
          {
            id: '8fe477c9-02fc-4896-addb-c0fed19be4ff',
            assigned: false,
            assigned_user: '',
            decommissioned: true,
          },
          {
            id: 'b1234567-89ab-cdef-0123-456789abcdef',
            assigned: false,
            assigned_user: '',
            decommissioned: false,
          },
          {
            id: 'c1234567-89ab-cdef-0123-456789abcdef',
            assigned: false,
            assigned_user: '',
            decommissioned: false,
          },
        ],
        users: [
          {
            id: 'user1',
            current_scooter: 'a35703f4-eea8-4e2b-be84-ad07fe603662',
          },
          {
            id: 'user2',
            current_scooter: '45601e30-01af-4dd9-9575-78661cf2a398',
          },
          {
            id: 'user3',
            current_scooter: '51a4a69a-7cd7-4a89-8c16-4b31547450b9',
          },
          {
            id: 'user4',
            current_scooter: '48aaee55-f8ad-4c58-be67-73def318753a',
          },
          {
            id: 'user5',
            current_scooter: '',
          },
          {
            id: 'user6',
            current_scooter: '',
          },
        ],
      }),
    );
  });

  it('should remove decommissioned and unassigned scooters', () => {
    const data = processScooters();
    expect(data.scooters).not.toContainEqual(
      expect.objectContaining({id: 'dacc2b76-57be-4fc5-8d02-36c7e43b6e0f'}),
    );
    expect(data.scooters).not.toContainEqual(
      expect.objectContaining({id: '8fe477c9-02fc-4896-addb-c0fed19be4ff'}),
    );
  });

  it('should assign available scooters to unassigned users', () => {
    const data = processScooters();
    expect(data.users.find(user => user.id === 'user5')?.current_scooter).toBe(
      'b1234567-89ab-cdef-0123-456789abcdef',
    );
    expect(data.users.find(user => user.id === 'user6')?.current_scooter).toBe(
      'c1234567-89ab-cdef-0123-456789abcdef',
    );
  });
});
