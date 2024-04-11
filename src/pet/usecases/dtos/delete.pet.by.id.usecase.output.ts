export default class DeletePetByIdUseCaseOutput {
    id: string

    constructor(data: Partial<DeletePetByIdUseCaseOutput>) {
        Object.assign(this, data)
    }
}