---
path: /blog/the-futuristic-advanced-php-part2
title: The Futuristic Advanced PHP - Part 2
date: 2020-09-02T12:01:09.420Z
thumbnail: php7-features.jpg
tag: technical
---
In this series on **What's New in PHP 7,** we first discussed about major features of the latest PHP version 7+. And now in this second post, I will list down major *improvements.*

1. Arrays as constants

   ```php
   define('APP_DIRS', array('app', 'incl', 'lib'));
   ```
2. Unicode codepoint Escape Syntax

   * Requires double-quoted string + escape syntax
   * ```php
      "\u{ codepoint }"
     ```
3. Uniform variable syntax

   ```javascript
   $name = 'car';
   $car = array('name' => 'BMW', 'year' => 2014);

   echo $$name['name'];
   // PHP 5: Warning: Illegal string offset 'name'
   // PHP 7: BMW`
   ```
4. Grouped imports with use()

   ```php
   require_once('constants.php');
   require_once('database.php');
   require_once('plurals.php');

   // PHP 7`\
   use App\Library\{Constants, Database as DB, Plurals}`
   ```
5. Catchable exceptions and errors The errors which were not catchable in PHP 5 are now possible using new error sub classes. Follow the below Error Hierrachy classes, please note Error & Exception classes are different, so use it wisely.

   * Throwable

     * Error

       * ArithmeticError
         * DivisionByZeroError
       * AssertionError
       * ParseError
       * TypeError
     * Exception
       * LogicException
       * RuntimeException

PS: One cannot create a subclass of throwable because it is an interface by both Error and Exception, not an actual class.
6. Integer division with intdiv()
```php
// Before
echo (int)(5/2); 
// 2
echo (float)(5/2); 
// 2

// After
echo intdiv(5, 2);
// 2
```
In the above example, Before - we typecast the value into int or float. 
Also, Technically for both int and float conversion the division results into floating-point number then after it converts into int or float, also you may be surprised that PHP float is bad in precision. Whereas, in intdiv just return int value.



