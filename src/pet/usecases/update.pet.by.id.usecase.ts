import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetByIdUseCaseInput from "./dtos/update.pet.by.id.usecase.input";
import UpdatePetByIdUseCaseOutput from "./dtos/update.pet.by.id.usecase.output";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class UpdatePetByIdUseCase implements IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput> {
    run(input: UpdatePetByIdUseCaseInput): Promise<UpdatePetByIdUseCaseOutput> {
        throw new Error("Method not implemented.");
    }
    
}