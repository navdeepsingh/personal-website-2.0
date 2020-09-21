---
path: /blog/the-futuristic-advanced-php-part1
title: The Futuristic Advanced PHP - Part 1
date: 2020-08-26T11:21:44.104Z
thumbnail: php7-features.jpg
tag: technical
---
In this era of REST API and microservices, as a backend developer one must knew how to craft API for its front end. I equally like to create API using PHP and Nodejs. Let's talk about PHP here in this post.

I will take a moment to highlight that: As of early 2020, [26% of programmers](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) are using PHP. Its one of the most popular server-side programming tools. I bet its because of WordPress (uses PHP) has 34% average market share of all websites and other is Facebook (also uses PHP)

## What's New in PHP 7

PHP 7 is the major release after span of 11 years. It's released in 2015 after its predecessor PHP 5 in 2005. It is safe to say that after the release of the new version, some crucially important updates and improvements were added. Programmers mostly stopped complaining about the performance of this tool.

The greatest benefits of seventh version are enhanced site speed and much better memory usage.

### Here is list of major features:

1. #### Better Performance

   * Optimizations and lower memory usage
   * Roughly twice as fast
   * Can handle twice as many requests with a single server
   * Could need half as many servers in data centers
2. #### Scalar Type Declarations

   * Specify the type of function arguments
   * "Type hinting"
   * Three techniques: none, coercive and strict
   * array, bool, string, float, int are types
3. #### Return Type Declarations

   * Specify the type of function return values
   * Three techniques: none, coercive and strict
   * Same identifiers as scalar type declarations
4. #### Combined Comparison Operator

   * <=>
   * "Spaceship Operator"
   * Used to compare two values
5. #### Null Coalescing Operator

   * ??
   * Returns first value that exists and is not NULL
   ```php
   // PHP 7
   echo $name ?? 'John Doe';
   // PHP 5
   echo isset($name) ? $name : 'John Doe';


6. #### Anonymous Classes

   * Define and instantiate class immediately with one line of code.
   * ```php
     new class { ... }
     
   * Useful for "throw-away" classes   `