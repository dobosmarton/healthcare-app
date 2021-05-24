import { Patient as PrismaPatient } from '@prisma/client';
import { Field, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
export abstract class Patient extends User implements PrismaPatient {
  @Field()
  email: string;
}
