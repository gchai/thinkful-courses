# DSA Interview

## Instructions

A concordance is a list of words present in a text along with the paragraph or line numbers on which they are found. They are similar to the index that you find at the back of textbooks but rather than listing page numbers for each word they list line numbers.

Given a body of text broken up into specific lines, can you create a concordance for the text?

## Existing Files

|**File**|**Description**|
|---|---|
|`__tests__/concordance.test.js`|Contains tests for the concordance task. You are welcome to look at this file but do not modify it.|
|`__tests__/searchLines.test.js`|Contains tests for the searchLines task. You are welcome to look at this file but do not modify it.|
|`src/concordance.js`|Write your solution to the concordance problem in this file.|
|`src/searchLines.js`|Write your solutions to the searchLines task in this file.|
|`src/lib/linkedList.js`|An implementation of a linked list. Do not edit this file.|
|`src/lib/node.js`|An implementation of a node. Do not edit this file.|
|`src/data.js`|A sample data file containing an array of sentences from which a concordance may be built. Do not edit this file.|

## Tasks

The following data structures are used in this challenge.

The body of the text is given as an array of strings where each string represents a single line of text. You may use the index of the string in the array as the line number. The file `src/data.js` contains an example of one such body of text.

```
const data = [
  "All human beings are born free and equal in dignity and rights.",
  "They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
  "Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status.",
  "Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.",
  ...
  ]
```

As you can see from this snippet the word "human" appears on line 0 and the word "distinction" appears on lines 2 and 3.

A concordance generated from this text may look like this:

```
{
        all: [
           0,  2,  5,  8, 9,
          13, 44, 48, 50
        ],
        human: [ 0, 39, 49 ],
        beings: [ 0 ],
        are: [
           0,  1,  8, 9,
          24, 43, 56
        ],
        born: [ 0, 44 ],
        free: [
           0, 25, 35, 36,
          37, 46, 55
        ],
        and: [
           0,  1,  2,  4,  5,  8,  9, 12, 15, 17,
          18, 19, 20, 23, 24, 25, 26, 29, 30, 31,
          35, 36, 37, 39, 40, 41, 42, 43, 46, 48,
          49, 50, 52, 53, 54, 55, 56, 57, 58
        ],
        equal: [
           0,  8,  9, 24,
          34, 35, 38
        ],
   ...
}
```

### `concordance()`

Write a function named `concordance` that accepts an array of strings representing a body of text and returns a concordance of that text. Note the following:

- do not include duplicate line numbers for words appearing more than once on a single line.
- the concordance should be case insensitive. That is, the words "Everyone" and "everyone" should be counted as the same word.
- hyphenated words are considered a single word. For example "non-self-governing" is a single word.
- the concordance does not have to be sorted.

You may find that you need to break up a long piece of text into individual words. Using the `.split()` method of the String object is useful for this purpose. The `.split()` method accepts a regular expression that makes it possible to describe complex rules for word endings. Here is one such expression that you may use:

```
/[\s.,';]/
```

For example, the following snippet of code:

```
"Everyone has the right to life, liberty and security of person.".split(/[\s.,';]/)
```

splits the given text into individual words by spaces, full stops, commas, single quotes and semi-colons. The result is an array:

```
[
  'Everyone', 'has',
  'the',      'right',
  'to',       'life',
  '',         'liberty',
  'and',      'security',
  'of',       'person',
  ''
]
```

Notice that there are some empty strings in that result. Those are not valid words and should not appear in the final output.

Write the solution to this problem in the file named `src/concordance.js`.

### `searchLines()`

Write a function named `searchLines()` that accepts:

1. **words**: a linked list of words
2. **concordance**: a concordance of a body of text formatted as described above
3. **data**: the original body of text from which the concordance was generated

Generate an array of strings representing the lines of text in which any of the words in the list appears.

For example, given the following concordance:

```
{
    exile: [ 11 ],
    full: [ 12, 23, 25, 49, 55 ],
    equality: [ 12 ],
    fair: [ 12 ]
}
```

and the words "exile", "equality" and "fair" and text given in the `src/data.js` file, construct the resulting array as follows:

The word "exile" occurs on line 11 and both words "equality" and "fair" appear on line 12 so return the lines 11 and 12. The result will be:

```
[
  "No one shall be subjected to arbitrary arrest, detention or exile.",
  "Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him."
]
```