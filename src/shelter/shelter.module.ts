import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterToken from './shelter.token';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usercase.output';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schema';
import { ShelterRepository } from './shelter.repository';
import ShelterTokens from './shelter.token';
import UpdateShelterDetailsUseCase from './usecases/update.shelter.details.usecase';

@Module({
  controllers: [ShelterController],
  
  imports: [
    MongooseModule.forFeature([{ name: Shelter.name, schema: ShelterSchema}])
  ],
  
  providers: [
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterDetailsUseCase
    },
    {
      provide: ShelterTokens.shelterRepository,
      useClass: ShelterRepository,
    },
    {
      provide: ShelterTokens.updateShelterDetailUseCase,
      useClass: UpdateShelterDetailsUseCase,
    }
  ],
})
export class ShelterModule {}
