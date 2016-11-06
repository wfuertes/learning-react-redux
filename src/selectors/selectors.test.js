import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
                { id: 'willian-batista', firstName: 'Willian', lastName: 'Batista' }
            ];

            const expected = [
                { value: 'cory-house', text: 'Cory House' },
                { value: 'willian-batista', text: 'Willian Batista' }
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});