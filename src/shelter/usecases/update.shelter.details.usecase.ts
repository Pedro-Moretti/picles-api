import { Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input";

@Injectable()
export default class UpdateShelterDetailsUseCase 
implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseInput>
{
    run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseInput> {
        throw new Error("Method not implemented.");
    }
    
}