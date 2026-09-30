import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@koffiehuis.nl',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jan de Vries',
    email: 'jan@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Anna van den Berg',
    email: 'anna@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
