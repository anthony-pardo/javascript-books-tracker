class BooksController < ApplicationController
  def index
    books = Book.all 
    options = {
      include: [:books], fields: { reviews: [:rating, :content, :author ]}
    }
    render json: BookSerializer.new(books, options)
  end
end
