---
draft: true
draftSectionTwo: true
enableToc: true
excludeBacklinks: false
created: 2024-10-21T07:00:00.000-0400
createdForSectionTwo: 2024-11-04T07:34:55.000-0400
tags:
---

```sql
-- 1. Retrieve the birth date, first name, last name, gender, and hire date of any employee whose last name is 'Schusler'.
SELECT birth_date, first_name, last_name, gender, hire_date 
FROM employees 
WHERE last_name = 'Schusler';

-- 2. Determine the average salary recorded in the salaries table.
SELECT AVG(salary) AS average_salary
FROM salaries;

-- 3. Retrieve first_name and last_name of all employees, displaying columns as Given Name and Family Name.
SELECT first_name AS "Given Name", last_name AS "Family Name"
FROM employees;

-- 4. Find all employees whose last name contains the letter 'a', listed in ascending order by first name.
SELECT *
FROM employees
WHERE last_name LIKE '%a%'
ORDER BY first_name ASC;

-- 5. Retrieve the employee id, first name, and last name of all employees who identify as female ('F') and who were born on or after January 1, 1960 (1960-01-01). Order results by last name, then first name, both in ascending order.
SELECT emp_id, first_name, last_name
FROM employees
WHERE birth_date >= '1960-01-01' AND gender = 'F'
ORDER BY last_name ASC, first_name ASC;

-- 6. Retrieve all employees whose last name starts with the letter 'M'.
SELECT *
FROM employees
WHERE last_name LIKE 'M%'
ORDER BY birth_date ASC;

-- 7. Determine the highest salary in the salaries table.
SELECT MAX(salary)
AS highest_salary
FROM salaries;

-- 8. Determine how many male employees and how many female employees have worked at the company across its entire history.
SELECT gender, COUNT(*) AS employee_count
FROM employees
GROUP BY gender;

-- 9. Find the employee id and salary of the lowest paid employee who has ever worked at the company.
SELECT emp_id, MIN(salary)
FROM salaries

```

10. What is the primary purpose of a Database Management System (DBMS)? Provide a brief explanation.

*Here are three plausible answers....*

**Answer 1:** 

The main job of a Database Management System (DBMS) is to organize, store, and manage data in a way that makes it easy to access, update, and secure. It helps users find and modify information quickly, without having to deal with all the complex details of the storage.
    
**Answer 2:**

A DBMS is software that helps manage large amounts of data. It allows users to add, remove, or search for information in an organized way, and ensures that the data is protected and consistent.

**Answer 3**
A DBMS is different from spreadsheets because it helps organize and manage large amounts of data more easily. While spreadsheets can become confusing with a lot of information, a DBMS makes sure the data is structured properly and easy to access. It also includes features for keeping the data safe and making sure everything stays accurate, which spreadsheets don’t offer. A DBMS is better for handling more complex data needs, like tracking relationships between different sets of information.