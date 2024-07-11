export default class Product {
    public title: string = '';
    public price: number = 0.00;
    public id: number = 0;
    public uuid: string = '';
    public shortDescription: string = '';
    public fullDescription: string = '';
    public images: string[] = [];

    public constructor(
        title: string = '',
        price: number = 0.00,
        id: number = 0,
        uuid: string = '',
        shortDescription: string = '',
        fullDescription: string = '',
        images: string[] = []
    ) {
        this.title = title;
        this.price = price;
        this.id = id;
        this.uuid = uuid;
        this.shortDescription = shortDescription;
        this.fullDescription = fullDescription;
        this.images = images;
    }
}