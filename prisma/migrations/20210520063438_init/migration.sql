-- CreateTable
CREATE TABLE "Meter" (
    "id" SERIAL NOT NULL,
    "deviceId" TEXT NOT NULL,
    "hubDeviceId" TEXT NOT NULL,
    "humidity" INTEGER NOT NULL,
    "temperature" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
