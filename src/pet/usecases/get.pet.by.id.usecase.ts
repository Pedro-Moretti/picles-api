import { IUseCase } from "src/domain/iusecase.interface";
import GetPetByIdUseCaseInput from "./dtos/get.pet.by.id.usecase.input";
import GetPetByIdUseCaseOutput from "./dtos/get.pet.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import { Pet } from "../schemas/pet.schema";
import PetTokens from "../pet.token";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import IFileService from "../interfaces/file.service.interface";
import AppTokens from "src/app.token";

@Injectable()
export default class GetPetByIdUseCase implements IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput> {
    
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,

        @Inject(AppTokens.fileService)
        private readonly fileService: IFileService
    ) { }
    
    async run(input: GetPetByIdUseCaseInput): Promise<GetPetByIdUseCaseOutput> {
        const pet = await this.getPetById(input.id)

        if (pet === null) {
            throw new PetNotFoundError()
        }

        const petPhoto = !!pet.photo ? (await this.fileService.readFileInBase64(pet.photo)) : null

        return new GetPetByIdUseCaseOutput({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.size,
            gender: pet.gender,
            bio: pet.bio,
            photo: petPhoto,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt,
        });
    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }
}