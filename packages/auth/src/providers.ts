import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';

export const previewProviders = [
  Credentials({
    name: 'Credentials',
    credentials: {
      username: {
        label: 'Username',
        type: 'text',
        placeholder: 'jsmith',
      },
      password: { label: 'Password', type: 'password' },
    },
    authorize() {
      return {
        id: '1',
        name: 'J Smith',
        email: 'jsmith@example.com',
        image: 'https://i.pravatar.cc/150?u=jsmith@example.com',
      };
    },
  }),
];

export const providers = [
  Github({
    clientId: process.env['GITHUB_CLIENT_ID']!,
    clientSecret: process.env['GITHUB_CLIENT_SECRET']!,
  }),
];
