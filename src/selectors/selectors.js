export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        let authorFullName = `${author.firstName} ${author.lastName}`;
        return {
            value: author.id,
            text: authorFullName
        };
    });
}