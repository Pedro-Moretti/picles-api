import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterToken from './shelter.token';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usercase.output';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';

@Module({
  controllers: [ShelterController],
  providers: [
    {
      provide: ShelterToken.getShelterDetailsUseCase,
      useClass: GetShelterDetailsUseCase
    }
  ]
})
export class ShelterModule {}
