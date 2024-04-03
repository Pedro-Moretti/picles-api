import { Body, Controller, Get, Inject, Patch, Post } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usercase.output';
import { IUseCase } from 'src/domain/iusecase.interface';
import ShelterToken from './shelter.token';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterToken.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IUseCase<null, GetShelterDetailsUseCaseOutput>

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput>{
        return await this.getShelterDetailsUseCase.run(null)
    }

    @Patch()
    async updateShelterDetails(@Body() input: UpdateShelterControllerInput) {
       console.log(input) 
    }
}
