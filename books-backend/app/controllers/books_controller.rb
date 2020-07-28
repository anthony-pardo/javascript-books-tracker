class BooksController < ApplicationController
  def index
    books = Book.all 
    options = {
      include: [:reviews], fields: { reviews: [:rating, :author ]}
    }
    render json: BookSerializer.new(books, options)
  end

  def create 
    book = Book.new(book_params)

    if book.save
      render json: book, status: :created, location: book
    else 
      render json: book.errors, status: :unprocessable_entity 
    end 
  end

  def destroy 
    book = Book.find_by(id: params[:id])
    book.delete 
  end

  private 

  def book_params
    params.require(:book).permit(:title, :author)
  end
end
