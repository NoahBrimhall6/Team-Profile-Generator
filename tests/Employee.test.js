const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('getName', () => {
    it('should return the employees name', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const result = new Employee(name, id, email).getName();
      expect(result).toEqual(name);
    });
  });

  describe('getID', () => {
    it('should return the employees id', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const result = new Employee(name, id, email).getId();
      expect(result).toEqual(id);
    });
  });

  describe('getEmail', () => {
    it('should return the employees email', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const result = new Employee(name, id, email).getEmail();
      expect(result).toEqual(email);
    });
  });

  describe('getRole', () => {
    it('should return "Employee"', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const result = new Employee(name, id, email).getRole();
      expect(result).toEqual("Employee");
    });
  });
});