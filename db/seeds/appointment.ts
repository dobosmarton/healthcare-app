import { Prisma, Profession } from '@prisma/client';
import dayjs from 'dayjs';

type AppointemntData = {
  [key in Profession]: Prisma.AppointmentCreateInput[];
};

export const appointmentData: AppointemntData = {
  [Profession.DENTIST]: [
    {
      name: 'Dental X-ray',
      date: dayjs().add(2, 'day').toDate(),
    },
    {
      name: 'Consultation',
      date: dayjs().add(2, 'day').toDate(),
    },
  ],
  [Profession.FAMILY_DOCTOR]: [
    {
      name: 'Blood sampling',
      date: dayjs().add(1, 'day').toDate(),
    },
  ],
};
