type AdminProps = {
  id: number,
  username: string,
  password: string,
  isTeacher: boolean,
  grade: number,
  class: number,
  name: string,
}

const admins: AdminProps[] = [
  {
    id: 1,
    username: 'admin',
    password: '9191',
    isTeacher: true,
    grade: 1,
    class: 7,
    name: '박성일',
  },
];

export async function findByUsername(username: string) {
  return admins.find((admin) => {
    console.log('admin.username', admin.username);
    console.log('username', username);
    return admin.username === username;
  });
}

// remove

export function test() {
}

// export async function findById(id) {
//   return users.find((user) => user.id === id);
// }

// export async function createUser(user) {
//   const created = { ...user, id: Date.now().toString() };
//   users.push(created);
//   return created.id;
// }
