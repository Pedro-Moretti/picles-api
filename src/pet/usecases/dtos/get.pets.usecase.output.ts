import PetResponse from "src/pet/dtos/pet.response";

export default class GetPetsUseCaseOutPut {
    currentPage: number;
    totalPage: number;
    items: PetResponse[];

    constructor (data: Partial<GetPetsUseCaseOutPut>) {
        Object.assign(this, data)
    }
}