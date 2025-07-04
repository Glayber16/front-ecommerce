export type Usuario = {
  id: string
  email: string
  senha: string
  role: 'admin' | 'user'
}

export const usuarios: Usuario[] = [
  {
    id: '1',
    email: 'admin@site.com',
    senha: 'admin123',
    role: 'admin',
  },
  {
    id: '2',
    email: 'cliente@site.com',
    senha: 'cliente123',
    role: 'user',
  },
]
