class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :author, :content, :rating
  belongs_to :book
end