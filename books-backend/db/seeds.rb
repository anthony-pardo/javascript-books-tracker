# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

book1 = Book.create(title: 'Lord of the Rings', author: 'JRRT')
Review.create(author: 'Random User', rating: 5, book_id: book1.id)
Review.create(author: 'Random User1', rating: 4, book_id: book1.id)
book2 = Book.create(title: 'Book of the New Sun', author: 'Gene Wolfe')
Review.create(author: 'Random User2', rating: 5, book_id: book2.id)
Review.create(author: 'Random User3', rating: 4, book_id: book2.id)
