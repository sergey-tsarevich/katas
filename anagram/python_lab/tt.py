# from urllib import urlopen
from urllib.request import urlopen

source_word = 'documenting'
# wordlist_url = ''
# wordlist_url = 'https://codingdojo.org/kata/word_list.txt'
wordlist_url = 'anagram/word_list.txt'


# wordlist = urlopen(wordlist_url).read().split('\n')
# wordlist = urlopen(wordlist_url).read().decode("utf-8")
with open(wordlist_url, 'r') as file:
    wordlist = file.read().replace('\n', '')
wordlist = wordlist.split('\n')
source_sorted = sorted(source_word)

print (source_word)

for word1 in wordlist:
   for word2 in wordlist:

       if word2 < word1:
           continue

       combination_sorted = sorted(word1 + word2)

       if combination_sorted == source_sorted:
           print (word1, word2)
           print (word2, word1)
