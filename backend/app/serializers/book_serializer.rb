class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :reviews
  has_many :reviews
end