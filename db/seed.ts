import { PrismaClient, Prisma } from '@prisma/client';
import { doctorData } from './seeds/doctor';
import { patientData } from './seeds/patient';
import { appointmentData as appointmentDataSeed } from './seeds/appointment';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const patientIds: string[] = [];
  for (const p of patientData) {
    const patient = await prisma.patient.create({
      data: p,
    });

    patientIds.push(patient.id);

    console.log(`Created patient with id: ${patient.id}`);
  }

  for (const d of doctorData) {
    const rndPatient = Math.floor(Math.random() * patientIds.length);
    const appointmentData = appointmentDataSeed[d.profession];

    const data: Prisma.DoctorCreateInput = {
      ...d,
      appointments: {
        createMany: {
          data: appointmentData.map((appointment) => ({
            ...appointment,
            patientId: patientIds[rndPatient],
          })),
        },
      },
    };
    const doctor = await prisma.doctor.create({ data });

    console.log(`Created doctor with id: ${doctor.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
