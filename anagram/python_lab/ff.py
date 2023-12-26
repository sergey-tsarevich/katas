word_to_anagram = "documenting"

def remove_trailing_whitespace(text):
   return text.rstrip()

word_list = [ remove_trailing_whitespace(line) for line in open("anagram/word_list.txt") ]
for first_word in word_list:
   for second_word in word_list:
       if sorted(word_to_anagram) == sorted(first_word + second_word):
           print( word_to_anagram, "=", first_word, "+", second_word)
