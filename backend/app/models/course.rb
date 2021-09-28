class Course < ApplicationRecord
  has_many :user_courses
  has_many :users, through: :user_courses
  has_many :assignments
  has_many :student_courses
  has_many :students, through: :student_courses
end
