## A Lodash library dumber clone

###### Status
###### 🦖 - codes are king of the jungle (max improvement of my abilities)
###### 👾 - codes need a bit of touch up to be fab
###### 🔥 - codes are in crisis or I don't know why but it runs

### Function Files
1. [head](head.js) - return the 1st element of an array | 🦖
2. [middle](middle.js) - return an array of the middle value of an array | 
3. [tail](tail.js) - return everything behind the head | 👾
4. [map](map.js) - self-implemented map (return an array results) | 👾
5. [takeUntil](takeUntil.js) - slice the array until meet the condition to stop and return an array of those elements | 🦖
6. [without](without.js) - return a new array with unwanted elements are removed (not support nested array as an elements)| 🦖
7. [countOnly](countOnly.js) - return an obj with the numbers of appearances of the letter in the string | 🦖
8. [countLetters](countLetters.js) - return an obj of the appearance of the letter in the string | 👾
9. [letterPositions](letterPositions.js) - return an obj of the position of letters in the string | 👾
10. [findKey](findKey.js) - using callback to improve
11. [findKeyByValue](findKeyByValue.js) - return the key that match the value in the obj | 🦖
12. [eqArrays](eqArrays.js) - check === of 2 arrays (not support nested array as an elements) and return true/false | 👾
13. [eqObjects](eqObjects.js) - check === of 2 objects and return true/false | 🔥 not return correct output

### Test Files
> Assert functions
14. [assertEqual](test/assertEqual.js) - console.log the message of test cases for 2 values | 🦖
15. [assertArraysEqual](test/assertArraysEqual.js) - console.log the message of test cases for 2 arrays | 🦖
16. [assertObjectsEqual](test/assertObjectsEquals.js) - console.log the message of test cases for 2 objectst | 🦖

> Test cases

> To run all 'chai' tests: `npm test`
> To run specific test: `npm test test\test_file_name`
17. [headTest](test/headTest.js) - test cases for [head](head.js)
18. [middleTest](test/middleTest.js) - test cases for [middle](middle.js)
19. [tailTest](test/tailTest.js) - test cases for [tail](tail.js)
20. [mapTest](test/mapTest.js) - test cases for [map](map.js)
21. [takeUntilTest](test/takeUntilTest.js) - test cases for [takeUntil](takeUntil.js)
22. [withoutTest](test/withoutTest.js) - test cases for [without](without.js)
23. [countOnlyTest](test/countOnlyTest.js) - test cases for [countOnly](countOnly.js)
24. [countLettersTest](test/countLettersTest.js) - test cases for [countLetters](countLetters.js)
25. [letterPositionTest](test/letterPositionTest.js) - test cases for [letterPosition](letterPosition.js)
26. [findKeyTest](test/findKeyTest.js) - test cases for [findKey](findKey.js)
27. [findKeyByValueTest](test/findKeyByValueTest.js) - test cases for [findKeyByValue](findKeyByValue.js)
28. [eqArraysTest](test/eqArrayTest.js) - test cases for [eqArray](eqArray.js)
29. [eqObjectsTest](test/.js) - test cases for [eqObjects](eqObjects.js)
30. [assertArraysEqualTest](test/assertArraysEqualTest.js) - test cases for [assertArraysEqual](assertArraysEqual.js)
31. [assertObjectsEqualTest](test/assertobjectsEqualTest.js) - test cases for [assertObjectsEqual](assertObjectsEquals.js)

> For exporting all Lotide functions
32. [index](index.js) - files to return an object contains entire Lotide functions