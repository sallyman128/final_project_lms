class Student < ApplicationRecord
  has_many :student_courses
  has_many :courses, through: :student_courses
  has_many :users, through: :courses
  has_many :assignments, through: :courses
end
