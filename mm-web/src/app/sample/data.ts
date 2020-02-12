import FlipCardInterface from '../interfaces/flip-card.interface';

const CARD_DATA: FlipCardInterface[] = [
    {
        card_id: 1,
        type: 'identical',
        name: 'Identical',
        message: 'Here you can find the identical results of given values',
        input: { first: [-1, 5, 10, 20, 29, 3], second: [30, 134, 135, 15, 17] },
        title: 'Identical Result',
    },
    {
        card_id: 2,
        type: 'sorted',
        name: 'Sorted',
        message: 'Here you can find the sorted results of given values',
        input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19],
        title: 'Sorted Result',
    },
    {
        card_id: 3,
        type: 'balance',
        name: 'Balance',
        message: 'Here you can find the balance results of given values',
        input: [1, 1, 1, 2, 1],
        title: 'Balance Result',
    }
];

export default CARD_DATA;


