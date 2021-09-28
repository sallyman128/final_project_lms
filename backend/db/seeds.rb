u1 = User.create(name: "Kakashi Hatake", email: "kakashi@sensei.com", password_digest: "password")

c1 = Course.create(title: "Mathematics", description: "A course on numbers.")
c2 = Course.create(title: "Science", description: "A course on planets and chemistry.")

a1 = Assignment.create(title: "Homework 1", description: "Do this homework", due_date: Faker::Date.between(from: '1995-12-08', to: '2021-12-31'))
a2 = Assignment.create(title: "Homework 2", description: "Do this homework", due_date: Faker::Date.between(from: '1995-12-08', to: '2021-12-31'))
a3 = Assignment.create(title: "Homework 1", description: "Do this homework", due_date: Faker::Date.between(from: '1995-12-08', to: '2021-12-31'))
a4 = Assignment.create(title: "Homework 2", description: "Do this homework", due_date: Faker::Date.between(from: '1995-12-08', to: '2021-12-31'))

s1 = Student.create(name: "Naruto Uzamaki", email: "naruto@gmail.com")
s2 = Student.create(name: "Sakura Haruno", email: "sakura@gmail.com")
s3 = Student.create(name: "Sasuke Uchiha", email: "sasuke@gmail.com")

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


