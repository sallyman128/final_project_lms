class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :courses
end