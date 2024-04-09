import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import PetTokens from './pet.token';
import CreatePetUseCase from './usecases/create.pet.usecase';

@Module({
  controllers: [PetController],
  providers: [
    {
      provide: PetTokens.createPetUseCase,
      useClass: CreatePetUseCase
    }
  ]
})
export class PetModule {}
