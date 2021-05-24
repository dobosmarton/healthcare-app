import { Prisma, Profession } from '@prisma/client';

export const doctorData: Prisma.DoctorCreateInput[] = [
  {
    name: 'Doctor John',
    profession: Profession.DENTIST,
  },
  {
    name: 'Doctor Helen',
    profession: Profession.FAMILY_DOCTOR,
    email: 'doctor.helen@gail.com',
  },
];
