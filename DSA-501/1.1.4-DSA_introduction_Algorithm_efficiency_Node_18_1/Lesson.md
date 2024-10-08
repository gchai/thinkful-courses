# An efficiency example

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to describe the efficiency of an algorithm in terms of its running time as a function of the size of input.

#### Overview

###### At this point, you can define an algorithm, you know some examples of famous algorithms, and you understand why the study of algorithms continues to be an important pursuit. In this lesson, you'll begin to take a closer look at what it means for an algorithm to be efficient. Efficiency, as you have already seen, is the main measured characteristic of an algorithm.

In a previous lesson, it was stated that an algorithm is a solution to a well-defined computational problem. It was also stated that there might be many algorithms that solve the same problem. So in this lesson, you'll define a problem and consider some possible solutions.

## The problem

The video below provides a brief introduction to solving an algorithm using a naive approach. Start by watching the video, and then read through the rest of the lesson and complete the practice tasks. This will give you a thorough understanding of this topic.

Given an integer n, find the sum of all integers from 1 to n inclusively.

For example, if n=4, the solution involves the sum 1+2+3+4=10.

## The first solution

To solve this problem, you could use a loop to count every integer from 1 to n and sum as you go. At the end of the loop, you will have the required sum.

Here is one way that the solution may be written:

`function sumIntegers(n) {` `let sum = 0;` `for (let i = 1; i <= n; i++) {` `sum = sum + i;` `}` `return sum;`

`}`

The question is now the following: how long does it take for this program to run? To find the answer, you can check the system time before you run the function and then check the system time again after the function is complete. Then you can find the difference to see how long it takes. There are some problems with this approach, as you will see, but it can give you a feel for the running time.

## Measuring the performance

The simplest way to measure the performance of a function in JavaScript is to surround your function with the console.time() and console.timeEnd() functions.

`const N = 100; // The input to the function` `console.time(); // Note the start time` `const answer = sumIntegers(N); // Call the function`

`console.timeEnd(); // Note the end time`

When the timer has stopped, the elapsed time will be displayed in the console. Note that [console.time](https://developer.mozilla.org/en-US/docs/Web/API/console/timeEnd#examples) will display the time in milliseconds.

A high-resolution timer is often preferred when measuring the performance of your functions. The Node environment has a built-in function, process.hrtime.bigint(), which gives you the current system time in nanosecond precision. Here's an example:

`const N = 100; // The input to the function` `const start = process.hrtime.bigint(); // Note the start time` `const answer = sumIntegers(N); // Call the function` `const end = process.hrtime.bigint(); // Note the end time`

``console.log(`Summing ${N} numbers took ${end - start} nanoseconds`);``

### Do this

#### Measure the running time of the function

Create a new JavaScript file and copy the code above into it. Execute the file and observe the output. Run the same code several times. Notice that every time that you run the code, the result is slightly different. For example, after running the code three times, this was the output:

`Summing 100 numbers took 26507 nanoseconds` `Summing 100 numbers took 22287 nanoseconds`

`Summing 100 numbers took 22816 nanoseconds`

Of course, the output on your machine will be different than the above output, because your machine may be faster or slower than the machine used to run the code for this example.

The important takeaway is that the actual time that it takes to run the program varies. This is because of several factors in the environment, such as what other processes may be running on the computer, how fast the CPU actually is, and how much memory may be available.

## Getting an average time

You can try running the code several times and finding an average. As shown below, update the code to run the function 10 times and find the average time.

`const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test` `const N = 100;` `let sumOfRunningTime = 0n;` `for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {` `const start = process.hrtime.bigint();` `const answer = sumIntegers(N);` `const end = process.hrtime.bigint();` `sumOfRunningTime += end - start;` `}` `const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);` `console.log(` `` `Summing ${N} numbers took an average of ${averageTime} nanoseconds` ``

`);`

This way, you can feel more confident about the value.

## As the input grows

The test above gives you a time for summing precisely 100 numbers. What if you had to sum more than that? How long would it take? It may be worthwhile to try the above program with some different numbers just to see what happens.

### Do this

#### Repeat the experiment with larger numbers

In the above code, change the value for N and run the code again. Here's an example:

`const N = 1000;`

Do this several times, with N set to 100, 500, 1000, 2000, 5000, and 10000. Note the time that each takes.

What can you say about the way that the length of time that it takes to run the function changes as the size of the input changes?

## Linear growth

You may have noticed that as the size of the input increases, the running time of the function increases correspondingly. Given this observation, you could extrapolate and guess the running time for even larger input sizes.

This is an important concept. Although it is useful to know the running time for a specific input size, it is actually more useful to have a formula that tells you how that running time changes as the input size changes.

If you plot the numbers on a graph, you may get something like this:

![](https://images.ctfassets.net/c7lxnbtvvcxm/mWrtcwoPqWW6ACG3GCLzI/700f036a499c7d811e93138c3cf95e05/Eng-dsa_intro_005.png)

The blue line shows the linear function, and the red line shows how the running time of the sumInteger() function changes as n changes. Notice that it is roughly the same rate of growth.

Given that, you can say that the function that was written has a linear growth rate. That is, the length of the running time changes proportionally to the size of the input.

This finding should be easy to see. In the function, there is a loop that goes from 1 to n. As n increases, the function has correspondingly more work to do.

## A second solution

The video below describes the process of solving an algorithm using a more optimal approach.

Is it possible to develop an algorithm that performs better than this first solution? And what exactly is meant by better here? In this case, better would mean a growth rate that is slower than the linear function. If there were another solution that had a running time that grew slower than the linear function as n increases, then you could say that you have a more efficient algorithm. That is, you can calculate larger values of n in less time.

Take a few moments to think about how you might approach this problem.

One way that it might be done was devised by the famous mathematician [Carl Friedrich Gauss](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss) when he was seven years old. Don't worry if you didn't think of this solution; Gauss is considered one of the greatest mathematicians of the age, and he basically invented algebra as it is known today.

Gauss came up with the formula n(n+1)/2. It is easy to verify that this is correct. For example, when n=100, the expression is evaluated as follows:

`100 * (100 + 1) / 2` `=> 100 * 101 / 2` `=> 10100 / 2`

`=> 5050`

This means that you can write a function to implement this formula like this:

`function sumIntegers2(n) {` `return (n * (n + 1)) / 2;`

`}`

### Do this

#### Measure this function

Using the same technique as before, run this new function several times with different input sizes. Note the running times as the input size increases.

What do you notice about the running time for this function as compared to the previous program?

## Running time of the second solution

You should have noticed that the running time remains roughly the same, no matter how large n is. That is, the running time remains constant as n increases. If you plot this on a graph, it may look like this:

![](https://images.ctfassets.net/c7lxnbtvvcxm/42MWuXWvK77ljKZuS8R918/a5cf2779103ab597471348f046a687f4/Eng-dsa_intro_006.png)

This time, the blue line shows the constant function. That is, the value does not change as the size of n changes. The red line is the growth rate of the function. Notice that even though there are slight variations, the function closely mirrors the constant function line.

Again, it is easy to explain why this is so for this second algorithm. No matter the value of n, you simply perform one multiplication operation, one addition operation, and one division operation to calculate the result. The same amount of work is done regardless of the size of n.

When the running time of a function doesn't change with changes to the input size, you can say that it has a constant growth rate.

## Comparing the growth rates

Now that it is known that the first algorithm has a linear growth rate and the second has a constant growth rate, which would you say is the more efficient algorithm? Plotting a constant function and a linear function on the same graph depicts the difference:

![](https://images.ctfassets.net/c7lxnbtvvcxm/6wIDX5iU2Af3RKdqb1Ibln/71cc872da30b933aad6331378e8f5334/Eng-dsa_intro_007.png)

In this graph, you can see that the linear function increases and the distance between the two lines grows as n increases. Therefore, a constant growth rate is more efficient than a linear growth rate.

## Problems with this approach

The exercise that you did in this lesson is useful to illustrate that the same problem can be solved in different ways, and some ways may be more efficient than other ways.

It also illustrated what is meant by running time. However, there are some problems with this approach.

First, you need a working program in order to run such an experiment. What if you had an idea for an algorithm and wanted to analyze the algorithm before you implemented it?

Second, the program depends on several factors, such as the programming language and even the skill of the programmer. These functions were written in JavaScript and executed in a Node environment. What if they were written in C or Python or Java? Would they run faster or slower? What if, in the first program, a for each loop was used instead of the for loop? Would that change the running time? Also, more experienced programmers may know techniques for writing more efficient code even if the algorithm itself has a poor growth rate. How can you account for that?

Third, the computer used for this experiment had its own configuration. The CPU, operating system, version of Node, amount of memory, and many other factors affect how fast programs run on a computer.

Fourth, this was a fairly simple algorithm. It took a few nanoseconds to run. It was easy to run it many times to determine the growth rate. What if the algorithm was more complex and took an hour to run? It wouldn't be practical to run the function ten times over in that case.

And fifth, how would you compare the running time of this algorithm to the running time of other algorithms? Suppose that it was published that this algorithm executed in 250 nanoseconds. If another programmer published that their algorithm ran in 200 nanoseconds, is it because their algorithm is better, or is it because of one of the factors mentioned above?

## Is there a better way?

There is a better way. What is needed is some way to analyze the running time of the algorithm independently of the programming language that it is written in or the computer hardware that it runs on.

In the next lesson, you will explore exactly such a technique.