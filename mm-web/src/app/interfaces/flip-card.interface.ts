
export default interface FlipCardInterface {
    card_id?: number | string;
    name: string;
    type: string;
    message: string;
    input: number[] | any;
    title: string;
    result?: string | any;
}
