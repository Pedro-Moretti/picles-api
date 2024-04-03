import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usercase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Gatos de Rua',
            shelterEmail: 'gatosderua@gmail.com',
            shelterPhone: '19995643214',
            shelterWhatsApp: '19995643214',
            createdAt: new Date(),
            updatedAt: new Date()
        }))
    }    
}