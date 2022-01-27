import { Request, Response } from 'express';

// import * as adminRepository from '../data/auth';

type UserProps = {
  id: number,
  username: string,
  password: string,
  isTeacher: boolean,
  grade: number,
  class: number,
  name: string,
}

export class AuthController {
  adminRepository: any;

  constructor(adminRepository: typeof import("../data/auth")) {
    this.adminRepository = adminRepository;
  }
  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user: UserProps | undefined = await this.adminRepository.findByUsername(username);

    if (user === undefined) {
      return res.status(401).json({ message: 'Invalid user' });
    }

    const isValidPassword: boolean = (password === user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token: string = 'TOKENTOKEN';

    res.status(200).json({ token, username });

    return 0;
  }
}



// remove
export async function test() {
  return 0;
}
