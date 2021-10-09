# README

## Description

This program is a prototype Learning Managment Software (LMS). It lets a user (a teacher) access and edit courses that they are assigned to. They can view all courses, but can only modify their own courses. They can add students to their course and add assignments.

## Install instructions

In your terminal, move to the /backend directory and run "$ bundle install" to download and install all the supporting gems. Similarly, move to the /frontend directory and run "$ npm install" to download and install all the dependencies.

From the /backend directory, run your rails server on port 9999 by running "$ rails server -p 9999". All the api data is accessible using this port along with the /api/v1/ addition to the url.

From the /frontend directory, start up your node server by running "$ npm start". It should automatically set you on the 3000 port.

All the client-side runs on port 3000 while the server-side runs on port 9999. 

From there, you should be able to navigate to localhost/3000 on your favorite browser to begin working with the application.

## Contributors guide

If you have any ideas on how to improve this app or may have found a bug, your contributions are more than welcome. Please just follow the typical git workflow.

  1. Fork this repo.
  2. Update your fork with the edits. And provide descriptive commit messages.
  3. Open a Pull Request against this repo.

I will gladly review the request and consider your suggestion. Thanks a ton! :)

## License

https://opensource.org/licenses/MIT

Copyright 2021 Salmaan Ali

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.