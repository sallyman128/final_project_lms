class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :assignments
end
