type MemberProps = {
  id: number,
  isStudent: boolean,
  grade: number,
  class: number,
  name: string,
  attendedDay: string[]
}

const members: MemberProps[] = [
  {
    id: 1,
    isStudent: false,
    grade: 1,
    class: 7,
    name: '박성일',
    attendedDay: ['220130'],
  },
];

export default members;
