class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :students, :assignments
end
