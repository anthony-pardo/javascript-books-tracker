class ReviewsController < ApplicationController
  def index
    if params[:book_id]
      book = Book.find_by(id: params[:book_id])
      if book.nil?
        render json: book.errors, status: :unprocessable_entity 
      else
        reviews = book.reviews
        render json: ReviewSerializer.new(reviews)
      end
    else 
      reviews = Review.all
      render json: ReviewSerializer.new(reviews)
    end
  end
end
