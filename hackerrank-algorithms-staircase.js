/**
 * https://www.hackerrank.com/challenges/staircase/problem
 */
let i = 0;
let n = 6;
let spaces = 0;

while (i <= n) {

	spaces = n-i;

	if (spaces < n && i <= n) {
		console.log (' '.repeat(spaces) + '#'.repeat(i));
	}

	i++;
}