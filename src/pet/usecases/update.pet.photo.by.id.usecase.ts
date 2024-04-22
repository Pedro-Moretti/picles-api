import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetPhotoByIdUseCaseInput from "./dtos/update.pet.photo.by.id.usecase.input";
import UpdatePetPhotoByIdUseCaseOutput from "./dtos/update.pet.photo.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.token";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import IPetRepository from "../interfaces/pet.repository.interface";
import { Pet } from "../schemas/pet.schema";
import IFileService from "../interfaces/file.service.interface";
import AppTokens from "src/app.token";

@Injectable()
export default class UpdatePetPhotoByIdUseCase implements IUseCase<UpdatePetPhotoByIdUseCaseInput, UpdatePetPhotoByIdUseCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,

        @Inject(AppTokens.fileService)
        private readonly fileService: IFileService
    ) { }

    async run(input: UpdatePetPhotoByIdUseCaseInput): Promise<UpdatePetPhotoByIdUseCaseOutput> {
        let pet = await this.getPetById(input.id);

        if (!pet) {
            throw new PetNotFoundError();
        }

        await this.petRepository.updateById({
            ...input,
            _id: input.id,
        });

        pet = await this.getPetById(input.id)

        const petPhoto = !!pet.photo ? (await this.fileService.readFileInBase64(pet.photo)): null;

        return new UpdatePetPhotoByIdUseCaseOutput({
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
           return
        }
    }

}