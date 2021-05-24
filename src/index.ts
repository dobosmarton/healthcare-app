import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { context } from './context';
import { DoctorResolver } from './resolvers/DoctorResolver';
import { Profession } from '@prisma/client';
import { AppointmentResolver } from './resolvers/AppointmentResolver';

const app = async () => {
  tq.registerEnumType(Profession, {
    name: 'Profession',
  });

  const schema = await tq.buildSchema({
    resolvers: [DoctorResolver, AppointmentResolver],
  });

  new ApolloServer({ schema, context: context }).listen({ port: 4000 }, () =>
    console.log(`
🚀 Server ready at: http://localhost:4000
⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`)
  );
};

app();
