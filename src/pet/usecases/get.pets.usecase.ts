import { IUseCase } from "src/domain/iusecase.interface";
import GetPetsUseCaseInput from "./dtos/get.pets.usecase.input";
import GetPetByIdUseCaseOutput from "./dtos/get.pet.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import GetPetsUseCaseOutPut from "./dtos/get.pets.usecase.output";
import PetTokens from "../pet.token";
import IPetRepository from "../interfaces/pet.repository.interface";
import AppTokens from "src/app.token";
import IFileService from "../interfaces/file.service.interface";
import PetResponse from "../dtos/pet.response";
import { query } from "express";

@Injectable()
export default class GetPetsUseCase implements IUseCase<GetPetsUseCaseInput, GetPetsUseCaseOutPut> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,

        @Inject(AppTokens.fileService)
        private readonly fileService: IFileService
    ) { }

    async run(input: GetPetsUseCaseInput): Promise<GetPetsUseCaseOutPut> {
        const queryResponse = await this.petRepository.findByFilter(input);

        const petResponseList: PetResponse[] = [];

        for (const currentPet of queryResponse.items) {
            if (currentPet.photo) {
                const photoInBase64 = await this.fileService.readFile(currentPet.photo);
                currentPet.photo = photoInBase64.toString('base64')
            }

            petResponseList.push(PetResponse.fromPet(currentPet));
        }

        const totalPages = Math.ceil(queryResponse.total / input.itemsPerPage);

        return new GetPetsUseCaseOutPut({
            currentPage: input.page,
            totalPages,
            items: petResponseList,
        });
    }
}