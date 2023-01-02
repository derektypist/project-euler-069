# Project Euler 069 - Totient Maximum

Euler's Totient function, &phi;(n) (sometimes called the phi function), is used to determine the number of numbers less than n which are relatively prime to n.  For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine &phi;(9) = 6.

<table>
<thead>
<tr>
<th>n</th>
<th>Relatively Prime</th>
<th>&phi;(n)</th>
<th>n/&phi;(n)</th>
</tr>
</thead>
<tbody>
<tr>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>3</td>
<td>1,2</td>
<td>2</td>
<td>1.5</td>
</tr>
<tr>
<td>4</td>
<td>1,3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>5</td>
<td>1,2,3,4</td>
<td>4</td>
<td>1.25</td>
</tr>
<tr>
<td>6</td>
<td>1,5</td>
<td>2</td>
<td>3</td>
</tr>
<tr>
<td>7</td>
<td>1,2,3,4,5,6</td>
<td>6</td>
<td>1.1666...</td>
</tr>
<tr>
<td>8</td>
<td>1,3,5,7</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>9</td>
<td>1,2,4,5,7,8</td>
<td>6</td>
<td>1.5</td>
</tr>
<tr>
<td>10</td>
<td>1,3,7,9</td>
<td>4</td>
<td>2.5</td>
</tr>
</tbody>
</table>

It can be seen that n=6, produces a maximum n/&phi;(n) for n &le; 10.

Find the value of n &le; limit for which n/&phi;(n) is a maximum.

Information at [Project Euler 069](https://projecteuler.net/problem=69)

## UX

**Getting Started**

Enter a whole number between 10 and 1000000 (without leading zeros) and select the Submit Button.  You will see the value of n &le; (number entered) for which n/&phi;(n) is a maximum as well as the number entered, unless you have made an invalid input.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 10 or greater than 1000000
- Including leading zeros such as 010
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, I expect the function `totientMaximum(10)` to return a number.

As a user, I expect the function `totientMaximum(10)` to return 6.

As a user, I expect the function `totientMaximum(10000)` to return 2310.

As a user, I expect the function `totientMaximum(500000)` to return 30030.

As a user, I expect the function `totientMaximum(1000000)` to return 510510.

User Stories on function `totientMaximum(limit)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 069](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-69-totient-maximum)

**Information Architecture**

The function `totientMaximum(limit)` returns a number, where `limit` is a number.

## Features

Allows the user to enter a number in order to find the value of n &le; (number entered) for which n/&phi;(n) is a maximum.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.3.0-alpha1 and Google Fonts.

