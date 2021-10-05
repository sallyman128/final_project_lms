class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :course_ids
end