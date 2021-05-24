import { Prisma } from '@prisma/client';

export const patientData: Prisma.PatientCreateInput[] = [
  {
    name: 'Patient John',
    email: 'patient.john@gmail.com',
  },
  {
    name: 'Patient Helen',
    email: 'patient.helen@gail.com',
  },
];
