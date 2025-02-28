---
draft: false
draftSectionTwo: true
created: 2025-02-28T07:00:00.000-0400
createdForSectionTwo: 2025-01-23T07:00:00.000-0400
tags:
---
There are many ways to store, or *persist*, data within an app.

One way to do this is to use a *database*.

A database is composed of one or more *tables* that store data.

You can think of a single database table as if it were a spreadsheet.

For example, here is a *spreadsheet* that lists the departments that exist within a large company:

![[Screenshot 2023-03-28 at 5.48.45 AM.png|250]]

And here is how that same information is presented in a database table:

![[Screenshot 2023-03-28 at 5.50.49 AM.png|200]]

In both cases, information is organized into *columns*:

- `dept_id`
- `dept_name`

Individual instances of data exist on a *row*.

For example, the `Sales` department has a department ID of `7` and exists on row 7 in the database. The `Customer Service` department has an ID of `9` and exists on row 9, and so on.

> [!NOTE]
> It is coincidental that each department ID is the same as the row number of the table it exists on.
> 
> A department with an ID of `7` does not have to be the seventh row in the table.



## Relationships

What separates a database from a simple spreadsheet is that tables are connected by relationships.

For example, here is the overall structure of an example database that describes the employees who work for a large company, along with information about their salaries, job titles, what department they work in, and who manages each department:

![[Pasted image 20230328060245.png]]

We will explore the concept of relationships between tables in a future class.

For now, the structure of this example database is provided for background.



## Database Management Systems

Just as there are multiple spreadsheet applications:

- Google Sheets
- Microsoft Excel
- Apple Numbers

...there are also multiple database applications, or database management systems.

The term *database management system* is sometimes shortened to the acronym DBMS.

Some common database applications are:

- MySQL
- PostgreSQL
- Oracle
- Microsoft SQL Server
- SQLite

Each DBMS has a slightly different feature set, much like different spreadsheet applications.

However, all DBMS software provides the same general functionality: we can organize information into tables that are connected by relationships.

Importantly, all DBMS applications allow a database to be *queried* using a standard language, or *syntax*.

This means that if you learn how to query a database created in one DBMS, for the most part, you will know how to query a database that was created in any other DBMS. Your knowledge is *transferable*.

To query a database means to obtain information from it.

In this class, we will work with the [SQLite](https://www.sqlite.org/about.html) DBMS. It is open-source, fast, free to use, and importantly, works great as a way to store data for iOS apps made with Swift and SwiftUI.



## Structured Query Language

DBMS software uses *structured query language*  or SQL to permit data to be obtained from a database.

We will practice using SQL together to query the `employees` example database described earlier.

First, we must install some software and obtain the example database.



## Required Software

First, download **[DB Browser for SQLite](https://download.sqlitebrowser.org/DB.Browser.for.SQLite-v3.13.1.dmg)**.

> [!NOTE]
> 
> The current version of DB Browser for SQLite is 3.13.1. Screenshots in this tutorial will show an older version number.

After downloading the disk image file – the .dmg file – double-click it, and then drag the DB Broswer for SQLite application to your Applications folder:

![[Screenshot 2023-03-28 at 6.35.35 AM.png|400]]

Afterwards, you can then eject the disk image:

![[Screenshot 2023-03-28 at 6.37.47 AM.png|300]]

And finally delete the disk image file from your **Downloads** folder:

![[Screenshot 2023-03-28 at 6.39.30 AM.png|450]]



## Example Database

Next, please [download the 'employees' database](https://www.russellgordon.ca/lcs/ics3u/databases/employees.zip).

You may need to double-click to expand the compressed .zip file:

![[Screenshot 2023-03-28 at 6.54.01 AM.png|100]]

Open the **employees** folder.

![[Screenshot 2023-03-28 at 6.53.50 AM.png|100]]

You can then drag the `employees.sqlite` file to your **Computer Studies** folder.

![[Screenshot 2023-03-28 at 6.54.42 AM.png|375]]



## Opening DB Browser

First, open the `employees` database in the DB Browser application by double-clicking the `employees.sqlite` file:

![[Screenshot 2023-03-28 at 6.58.05 AM.png|400]]

You will see the following dialog box:

![[Screenshot 2023-03-28 at 6.59.25 AM.png|250]]

It is safe to open this file, so select **Open**.

This will happen only the first time you open DB Browser.

You may also see this dialog box:

![[Screenshot 2023-03-28 at 7.00.40 AM.png|250]]

Again, select **Open**. You should not see this dialog box the next time you open DB Browser.

Select the **Execute SQL** tab, and you should see something like this:

![[Screenshot 2023-03-28 at 7.03.49 AM.png]]

> [!TIP]
> At this point, you can optionally make some recommended configuration changes to DB Browser to [[Configuring DB Browser|change the fonts and colours it uses to display results]].

## Practicing with SQL

Now we are ready to start querying the database.

First, let's see all of the departments within the company. Type the following query:

```sql
-- Get a list of all departments
SELECT *
FROM departments
```

You should see this result:

![[Screenshot 2023-03-29 at 6.25.16 AM.png]]

We can change the order that results are returned in:

```sql
-- Get a list of all departments, in alphabetical order
SELECT *
FROM departments
ORDER BY dept_name ASC
```

You should see this result:

![[Screenshot 2023-03-29 at 6.26.33 AM.png]]

## Exercises

In fact, there are many ways that queries can be constructed.

The best way to learn is by *doing*, and taking notes as you go.

Work with a partner, and [[sql-basics-cheat-sheet-letter.pdf|refer to this summary sheet]]:

![[sql-basics-cheat-sheet-letter.pdf]]

... to complete the questions listed a bit further below.

> [!TIP]
> 
> DB Browser is a macOS desktop application. Your work to answer these questions will exist in a *document* which you must create and save changes to manually (as opposed to environments like Google Docs where your work is automatically saved).
> 
> You are strongly recommended to take five minutes and watch this video that demonstrates how to work with multiple queries in DB Browser – this also shows how to save your work:
> 
> <div style="padding:56.25% 0 0 0;position:relative;">
>	<iframe src="https://player.vimeo.com/video/1049673749?h=d674d239c8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
> 	</iframe>
>	</div>
>	<script src="https://player.vimeo.com/api/player.js"></script>

For reference, here is the diagram showing the database schema once again:

![[Pasted image 20230328060245.png]]

Now, with your partner, try to write queries to answer these questions, pasting screenshots of your queries and the results in your portfolio [on Notion](https://notion.so):

1.  Find a list of all the departments in the company.     
2.  Write a query to get the details for the first 25 employees in the employee table ordered by first name, descending. 
>[!HINT]
> Append `LIMIT x` to your query, where x is an integer        
3.  Write a query to display the first 10 employee names (`first_name`, `last_name`) using the alias name "First Name", "Last Name”.  
4.  How many male employees are there?  How many female employees?
5.  Write a query that lists all the salaries for employees in the company, in ascending order.   
> [!NOTE]
> Depending on the speed of your computer, this query might take a few extra seconds to run. Be patient. 🙂    
6.  Write a query that lists all the salaries for employees in the company, in descending order.  
> [!NOTE]
> Depending on the speed of your computer, this query might take a few extra seconds to run. Be patient. 🙂
7.  Write a query to get the total salaries payable to employees.  
8.  What is the average salary for all employees?  
9.  How many employees work for the company?
10.  Find a list of employee IDs where the salary paid is greater than $60000.  
11.  _How many_ employee IDs have been tied to a salary that is greater than $60000?  
12.  Find a list of employee IDs where the salary paid is in the range \$60000 to \$70000.  
13.  _How many_ employee IDs have been tied to a salary in the range \$60000 to \$70000?  
14.  Find a list of employee IDs whose salary is *not* in the range \$60000 to \$70000.  
15.  Find only the maximum and minimum salary paid to employee number 10012.  
16.  Find the maximum and minimum salary paid to all employees.  
17.  Write a query to display the first name and last name of all employees who have both "b" and "c" in their first name.  Order the results by first name, then by last name.
18.  Find a list of all the job titles held by employee number 499998. List the job titles in alphabetical order.