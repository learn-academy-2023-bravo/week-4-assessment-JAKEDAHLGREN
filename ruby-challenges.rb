# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Pseudo
# Input: number
# Output: string that says "#{num} is even", or "#{num} is odd"
# Process
  # Declare a method called odd_or_even with the parameter (num)
  # Use 'if' 'else' statement
  # if num % 2 == 0 return string interpilation "#{num} is even" 
  # else return string interpilation "#{num} is odd" 
  # print odd_or_even with the argument (variable name)

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def odd_or_even (num)
  if num % 2 == 0 
    "#{num} is even" 
  else 
    "#{num} is odd" 
  end 
end
p odd_or_even(reposts1)
# Output:"7 is odd"
p odd_or_even(reposts2)
# Output:"42 is even"
p odd_or_even(reposts3)
# Output:"221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Pseudo
# Input: string
# Output: string with no vowels
# Process
  # declare a method called no_vowels with the parameter (string)
  # create a statement that uses .delete set to all vowels upper and lower case 'aeiouAEIOU' 
  # print the method with the argument (variable name)

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

### This is the Hard code to print desired output ###

# p beatles_album1.delete('aeiouAEIOU')
    #output:"Rbbr Sl"
# p beatles_album2.delete('aeiouAEIOU')
    #output:"Sgt Pppr"
#  p beatles_album3.delete('aeiouAEIOU')
    #output:"bby Rd"
    
  # Method 

  def no_vowels (string)
    string.delete'aeiouAEIOU'   
  end

  p no_vowels(beatles_album1)
# output: "Rbbr Sl"
  p no_vowels(beatles_album2)
# output: "Sgt Pppr"
  p no_vowels(beatles_album3)
# output: "bby Rd"

  
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# Pseudo
# Input: string
# Output: is or is not a palindrome
# Process
  # Declare a method called palindrome_test with the parameter of string
  # set a condition if the string.downcase (makes the string lowercase) equal to string.downcase.reverse (makes the string lowercase and backwards)
  # If true, return the word with string interpilation "#{string} is a palindrome"
  # Else, return the word with string interpilation "#{string} is not a palindrome"
  # print palindrom_test with the argument (variable name)

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_test (string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end 
 
p palindrome_test(palindrome_tester1)
# Output:"Racecar is a palindrome"
p palindrome_test(palindrome_tester2)
# Output:"LEARN is not a palindrome"
p palindrome_test(palindrome_tester3)
# Output:"Rotator is a palindrome"