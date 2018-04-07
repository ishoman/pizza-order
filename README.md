# Pizza Ordering

#### A basic pizza ordering app.  04/04/2018

#### By **Isaac Shoman**

## Description

A basic pizza ordering app that accepts user input and allows them to choose flavors, etc. for their pizza.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program accepts user input for size** | User input: "large" | Output: "large"|
| **Program accepts user input for one topping into an array** | User input: "pepperoni" | Output: "[pepperoni]"|
| **Program assigns dollar value to each property of the pizza.| User Input: "large, pepperoni" | Output: "large = $16, pepperoni = $1.5"|
| **Program totals dollar value for pizza and outputs as cost.| User Input: "large, pepperoni" | Output: "$17.50"|
| **Program prints inputted user name and cost of the pizza into an output sentence.| User Input: "Isaac, large, pepperoni" | Output: "Isaac, your pizza costs $14.50. Come back soon!"|
| **Program accepts user input for multiple toppings** | User input: "cheese, pepperoni" | Output: "[cheese, pepperoni]"|


## Setup/Installation Requirements

1. Clone this repository.
2. Open in a browser.
3. To edit code, open in a text editor.

## Known Bugs
* Program does not assign value for additional toppings. Price is still accurate for two toppings, but index[1] of the toppings array is undefined, and any more than two toppings does not output an accurate price.

## Technologies Used
* JS
* JQuery 3.3.1
* Bootstrap

## Support and contact details

_Email Isaac with any questions, comments, or concerns. isaac.shoman@gmail.com_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Isaac Shoman}_**
