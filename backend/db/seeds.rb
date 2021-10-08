u1 = User.create(name: "Kakashi Hatake", email: "kakashi@sensei.com", password: "password")

c1 = Course.create(title: "Mathematics", description: "A course on numbers.")
c2 = Course.create(title: "Science", description: "A course on planets and chemistry.")

a1 = Assignment.create(title: "Homework 1 for course 1", description: "Do this homework")
a2 = Assignment.create(title: "Homework 2 for course 1", description: "Do this homework")
a3 = Assignment.create(title: "Homework 1 for course 2", description: "Do this homework")
a4 = Assignment.create(title: "Homework 2 for course 2", description: "Do this homework")

s1 = Student.create(name: Faker::Name.first_name + " " + Faker::Name.last_name, email: Faker::Internet.email)
s2 = Student.create(name: Faker::Name.first_name + " " + Faker::Name.last_name, email: Faker::Internet.email)
s3 = Student.create(name: Faker::Name.first_name + " " + Faker::Name.last_name, email: Faker::Internet.email)

20.times do 
  Student.create(name: Faker::Name.first_name + " " + Faker::Name.last_name, email: Faker::Internet.email)
end

u1.courses << c1
u1.courses << c2

c1.students << s1
c1.students << s2
c1.students << s3
c2.students << s1
c2.students << s2

c1.assignments << a1
c1.assignments << a2
c2.assignments << a3
c2.assignments << a4