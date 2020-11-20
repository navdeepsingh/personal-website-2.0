---
path: /blog/test-driven-development-es6-javascript
title: Test Driven Development in ES6 JavaScript
date: 2020-11-20T07:18:44.936Z
thumbnail: ben-mullins-oxv3bzr7jxi-unsplash.jpg
tag: technical
---
TDD; Test Driven Development is the essential requirement in software companies these days, although this term coined in 1999 by [Kent Beck](https://martinfowler.com/bliki/TestDrivenDevelopment.html){:target="_blank"}. But some companies religiously followed this environment to develop the software and some don't even give heed to this. The companies who don't give TDD importance are those who haven't any CTO or they want to deliver the results asap with pressure on the developer and later on production tackling the bugs live. \
\
So this topic is already very debated. But I think as a developer we must understand the concepts and its usage. I am trying to grasp it slowly and anyone become proficient in it by practicing it in their daily jobs (if official work don't allow then in your side-projects it's completely doable)

Let me share the Basics of TDD:

## 3 Types of Testing:

**1. Unit Testing**: Individual components or functionality is being tested. Mocha & Chai are popular to test React app.

**2. Implementation Testing:** Different components with other components or API tested together.

**3. E2E Tests:** End to End testing, without using a browser and actual utility, we can test the source code on live behavior. These tests can be ignored by a developer as these are done by QA engineers mostly.

Also, Test code is being written before writing actual production code, it helps in:\
1. Code quality\
2. Clarify our thinking before proceeding with writing the code.

## Steps to create TDD:

1. Write a failing test. Test must be (RITE: Readable, Isolated, Thorough, Explicit) followed.

2. Refactor the code.

3. Pass the code.