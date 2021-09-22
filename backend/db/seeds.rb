# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

c1 = Course.create(title: "Mathematics", description: "A course on numbers.")
c2 = Course.create(title: "Science", description: "A course on planets and chemistry.")

t1 = Teacher.create(prefix: "Mr.", first_name: "Jon", last_name: "Snow", email: "Jon.Snow@teacher.com")
t2 = Teacher.create(prefix: "Ms.", first_name: "Cinder", last_name: "Ella", email: "Cinderella@teacher.com")

c1.teachers << t1
c2.teachers << t2