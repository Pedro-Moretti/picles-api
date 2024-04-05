import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterToken from './shelter.token';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usercase.output';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schema';

@Module({
  controllers: [ShelterController],
  imports: [
    MongooseModule.forFeature([{ name: Shelter.name, schema: ShelterSchema}])
  ],
  
  providers: [
    {
      provide: ShelterToken.getShelterDetailsUseCase,
      useClass: GetShelterDetailsUseCase
    }
  ]
})
export class ShelterModule {}
