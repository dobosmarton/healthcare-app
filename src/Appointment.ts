import { Appointment as PrismaAppointment, Prisma } from '@prisma/client';
import { ObjectType, Field, ID, InputType } from 'type-graphql';
import { Doctor } from './Doctor';
import { Patient } from './Patient';

@ObjectType()
export abstract class Appointment implements Omit<PrismaAppointment, 'patientId' | 'doctorId'> {
  @Field((_) => ID)
  id: string;

  @Field((_) => Date)
  createdAt: Date;

  @Field(() => Date)
  date: Date;

  @Field((_) => String)
  name: string;

  @Field((_) => Doctor, { nullable: true })
  doctor?: Doctor;

  @Field((_) => Patient, { nullable: true })
  patient?: Doctor;
}

@InputType()
export abstract class AppointmentCreateInput implements Prisma.AppointmentCreateInput {
  @Field()
  date: string;

  @Field()
  name: string;
}
