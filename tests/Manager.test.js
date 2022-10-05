const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('getRole', () => {
    it('should return "Manager"', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const officeNum = 205;
      const result = new Manager(name, id, email, officeNum).getRole();
      expect(result).toBe("Manager");
    });
  });
});