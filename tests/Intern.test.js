const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('getSchool', () => {
    it('should return the interns school', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const school = 'UofU';
      const result = new Intern(name, id, email, school).getSchool();
      expect(result).toBe(school);
    });
  });

  describe('getRole', () => {
    it('should return "Intern"', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const school = 'UofU';
      const result = new Intern(name, id, email, school).getRole();
      expect(result).toBe("Intern");
    });
  });
});
