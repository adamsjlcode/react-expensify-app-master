import selectExpenses from '../../js/selectors/expenses';
import moment from "moment";

const expenses = [{
        id: '1',
        description:'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description:'Rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description:'Credit Card',
        note: '',
        amount: 40095,
        createdAt: moment(0).add(4, 'days').valueOf()
    }];

test('Should filter by text value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]])
});
test('Should filter by startDate', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]])
});