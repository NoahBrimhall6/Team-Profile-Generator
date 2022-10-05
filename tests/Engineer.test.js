const Engineer = require('../lib/Engineer');
 
describe('Engineer', () => {
  describe('getGithub', () => {
    it('should return a link to the engineers github profile', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const github = 'noahbrimhall6';
      const link = 'https://github.com/noahbrimhall6';
      const result = new Engineer(name, id, email, github).getGithub();
      expect(result).toBe(link);
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const name = 'Noah';
      const id = 5;
      const email = 'noah@email.com';
      const github = 'noahbrimhall6';
      const result = new Engineer(name, id, email, github).getRole();
      expect(result).toBe("Engineer");
    });
  });
});
