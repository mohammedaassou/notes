



export class NoteModel {
    static curentId = 0;

    constructor(title, description , id) {

        this.title = title
        this.description = description
        this.id = NoteModel.curentId++
    }

}  