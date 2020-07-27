class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :rating, :content, :author
  has_many :reviews
end