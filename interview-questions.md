# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.
 
1. What is object-oriented programming? How is it different than functional programming?

Your answer:

Object-oriented programming is an approach to coding that focuses on making everything, that is part of your code, into objects. The idea is that if you break your code into smaller chunks (objects) you can make your code less redundant, easier to assign tasks when collaborating, and more user friendly. I also believe that it would make tracing any issues you may have easier, because you can trace it back to an object instead of having to go through your entire code block.  


Researched answer:

Object-oriented programming is a programming model that organizes software/application design around data or 'objects' rather than functions and logic. Objects can be defined as a data field that has unique attributes and behaviors. This approach works great for programs that are larger scale, complex, and are actively being updated and maintained. I would think a great examples of OOP would be instagram and twitter. They have tons of repeating parts, that are objects, which can be replicated over and over. OOP is a great method for collaboration within the development team. You can divide tasks into groups, not to mention it increases reusability, scalability, and efficiency. The process of OOP starts with decide which objects you want to manipulate, and group them together by how they relate to eachother. Then create a class to contain all the objects and defines the type of data it will be holding. Now you can call upon methods (functions that belong to objects) to run any of the logic in your program.

1. What is the difference between a Float and an Integer in Ruby?

Your answer:

Ruby has multiple different data types, and based on what type you are working with it allows you to run different operators and methods. When you call on a whole number in Ruby, it is classified as an integer. Integers include all positive and negative whole numbers and zero (ex: -1, -3, 2, 5). The Ruby data type, Floats, refers to partial numbers such as a decimal or fractions. The '.' is called a 'float', so when using this data type we need to write it as a decimal '2.5', not like a fraction '5/2'. The number with a decimal (2.5) is the actual representation of the float data type.

Researched answer:

In Ruby, Floats and Integers are both data types. A float, which is defined by the '.', is a number in Ruby that contains a decimal point. If you try and divide integers in Ruby, it will try and return the nearest whole number instead of actually performing the accurate mathmatics.Ruby will consider any number written without decimals to be an integer. It can be a positive or negative whole number. This happens because it sees you giving it two of the same data types, integers, and it wants to return the same data type. 


1. Ruby has an implicit return. What does that mean?

Your answer:

Implicit return means that if there is no stated return the last line of code, in a method, will be returned.



Researched answer:

In Ruby, the implicit return of a method is the final statment within a method. Unlike explicit return, when the return is called for by a keyword, this means that the method will return the result of the final line before the keyword end. I view it to be similar to the 'else' in and 'if else' statement, because it is a catch all. When no returned is called for, the last line is the catch all an the last condition, so it becomes the return implicently. 

1. What is a block in Ruby?

Your answer:

Ruby blocks are annonymous functions passed to a method to determine the outcome. You pass a blocks arguments by putting it inbetween pipes (ex: |value|). You can pass as many parameters through your pipes as you need. Blocks are usually defined by the key words 'do' and 'end'. Like the Ruby song goes, for every do... there is an end, for every if/there is an end, and lastly for every def (method) there is an end. If you don't format your blocks properly, it is easy to loose track of how many ends you need in order for your code to run. 


Researched answer:

Ruby Blocks are similar to a Ruby method, but blocks are anonymous pieces of code that take in arguments and return a value. They are typically defined within a do-end statement or culy braces. The curly braces are only used whe the blocks code is a single line. Blocks allow you to group code into a standalone piece of code that you can use as a method argument. The |pipe| symbols in Ruby are what contain the arguments for the block, and then can be passed throughout the method. 



1. How do you extract a value in a Ruby hash?

Your answer:

Ruby hashes are made up of key:value pairs, similar to an object in JavaScript. If you want to return the value, you must call the key name of the value you are after. The key value pairs use a hash rocket to join them instead of a colon. 


Researched answer:

A Ruby Hash is a container that stores data and is composed of unique key:value pairs. They are similare to objects in JavaScripts, but instead of using the colon to join their key:value pair, they impliment the Hash Rocket (ex. fav_color = {'eyes' => 'blue', 'hair' = 'brown'}). Hashes don't utilize indexed positions like some other composite data types, so when you want to access the data in a hash you must call it by its 'key' name to return its 'value'.  The Ruby Hash is great for transforming your data into a "dictionary-like format". I like this dictionary metaphor, so let me expand. Think of the key, in a Ruby hash, as the word you are looking up, and the definition of that word is the value that is being stored. 

## Looking Ahead: Terms for Next Week

1. RSpec:

RSpec is a testing tool for Ruby that was created for behavior-driven development. It is the most used testing library for Ruby in regards to production applications. It is said to be a simple tool to use, even though it uses a domain specific language.


2. Test-driven development:

This is a programming approach in which you start to write the test cases before the application or software is fully developed. Then you can add more features in order to pass all test cases.


3. PostgreSQL:

Is a highly stable database management system, and it is used as the primary data store or data warehouse for many mobile apps, websites, geospatial apps, and analytic apps. When using Ruby on Rails, it is the default database. 


4. CRUD:

CRUD is an acronym for create, read, update, and delete. These are the four essential operations for creating and managing persistent data elements. With these four operators the active record automatically allows an application to read and manipulate data stored within tables.



5. HTTP:

Hypertext Transfer Protocol is the communication protocal that connects to web servers on the internet or intranet(local server). HTTP allows transferring files like sound, text, and images from one server to the user's browsers. Bassically, it is what allows you to load webpages, from anywhere in the world, on your local server or computer.
