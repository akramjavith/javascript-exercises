const getTheTitles = function(array) {
    const books = [
        {
          title: 'Book1',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
      return array.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
