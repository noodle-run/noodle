import { type Session } from '@noodle/auth';

export const fakeSession: Session = {
  expires: '123',
  user: {
    id: '123',
    name: 'John Doe',
    email: 'johndoe@johndoe.com',
    image: 'https://johndoe.com/avatar.png',
  },
};
