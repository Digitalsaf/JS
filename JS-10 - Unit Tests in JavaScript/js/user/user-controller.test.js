const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('add user to userController', () => {    
    let user = new User(1235,"mmasd", "santiagtryto@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);  
  });

test('remove user to userController', () => {    
    let user = new User(1251,"Sosfa", "santiagasdo@generation.org");   
    expect(userController.users).not.toContain(user);
    userController.remove(user);
  });

  test('find user by email ', () => {
    let user= new User(2462, 'test', 'test1@mail.com');
    userController.add(user);
    userController.findByEmail('test1@mail.com');
    expect(userController.findByEmail('test1@mail.com')).toEqual({"email": "test1@mail.com", "id": 2462, "name": "test"});
  });
  
  test('find user by ID ', () => {
    let user= new User(2470, 'test1', 'test12@mail.com');
    userController.add(user);
    userController.findById(2470);
    expect(userController.findById(2470)).toEqual({"email": "test12@mail.com", "id": 2470, "name": "test1"});
  });
  


