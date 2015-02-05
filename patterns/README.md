# [![Modern Healthcare Logo](http://www.modernhealthcare.com/images/mh-logo.gif 'Modern Healthcare Logo')](http://modernhealthcare.github.io)

> The leader in healthcare business news, research & data

# Table of Contents
- [Goal](#goal)
- [Backend](#backend)
- [Frontend](#frontend)
- [Timeline](#timeline)

## Goal

We want to engineer a flexiable, scaleable database that houses data specific to people within the healthcare industry.  This data will be managed through our custom content engine via our edit interface.  On the frontend, the data will be iterated on through by [AngularJS](http://angularjs.org), which will be the modular framework for our user interface.  With this sturcture in place, we can build out all of our Awards &mp; Recognition programs to not just be fast, highly interactive, but to also connect data across all different categories and give our users the ability to filter through data efficiently.

## Backend

The backend will use our current edit interface as the content management system.  We can then develop an API with the CCE (custom content engine) and manipulate the data anyway we choose.  This database will be scaleable and will allow for even larger projects.

### Database/CCE

Data for people in healthcare:

- Name of program
- Year of program
- Overall rank that year
- Picture that year
- Firstname
- Lastname
- Gender
- Title
- Sector
- Age
- City
- State
- Country
- Compensation
- Tagged recently
- Other programs
- Other awards

Data for places in healthcare:
- Name of program
- Year of program
- Overall rank that year
- Picture that year
- Name
- Category
- Size
- Location
- Years
- Average salary, exempt
- Avverage slary, non-exempt
- Website
- Employees


### RESTful API

Using the customization available to us with the CCE, we will build out a [RESTful API](http://en.wikipedia.org/wiki/Representational_state_transfer) that has all the data for our Awards &amp; Recognition programs available.


## Frontend

With the data in place, we can build out the frontend to extend browser technologies with a [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) framework like [AngularJS](https://angularjs.org/).

Design ideas:
- [Content Filter](http://codyhouse.co/gem/content-filter/)

### AngularJS

This frontend will function like a modern, single-page web app.  It will be modular and filterable with all data available on any given program.  This allows for great flexibility and will create a speedy interface so that users can find what they want, when they want.

## Timeline

1.  Develop CCE objects and [RESTful API](http://en.wikipedia.org/wiki/Representational_state_transfer) API *(2-3 weeks)*
2.  Add content from prior years and new programs *(1-2 weeks)*
3.  Design/develop the [AngularJS](https://angularjs.org/) module *(3-4 weeks)*
4.  [Unit and e2e testing](http://www.sitepoint.com/unit-and-e2e-testing-in-angularjs/) *(2 weeks)*
5.  QA *(1 week)*
6.  Lanuch
