import { IUseCase } from "src/domain/iusecase.interface";
import DeletePetByIdUseCaseInput from "./dtos/delete.pet.by.id.usecase.input";

export default class DeletePetByIdUseCase implements IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCase> {
    run(input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCase> {
        throw new Error("Method not implemented.");
    }
}