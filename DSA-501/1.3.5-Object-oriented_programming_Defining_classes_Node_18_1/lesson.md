# Defining classes

**1.5 hours** Average completion time

#### What you'll learn

###### By the end of this lesson, you will be able to define a class with a constructor. You'll also be able to create an instance, access the attributes of the instance, define a class with methods, and call the methods with an instance of the class.

#### Overview

###### In this lesson, you'll learn the basics of object-oriented programming—you'll learn how to create and interact with classes. This will help you organize chunks of related code together, thus improving the readability and reusability of your code.

## Key Terms

Object-oriented programming

OOP, a programming paradigm where data is stored into objects as individual fields, attributes, or parameters, which the code manipulates through different procedures and methods

Class instance

An object built to the specifications of a given class

Constructor

A special function that defines how a new instance of a class is created

Object-oriented programming (OOP) is often seen as an alternative programming style to functional programming. The OOP style is based on the use of classes. Classes are a way of creating objects; they are very useful when you know that you will create multiple objects that all have similar properties.

Class

A blueprint for creating objects which makes it easy to create multiple objects that all have similar properties

For example, if you want to create a series of objects that hold information about the birthday parties of all your friends, creating a birthdayParty class will help you make each object using the same pattern. In this case, each birthdayParty object will have an event name, the start time, the end time, and the location.

JavaScript was designed as a functional programming language, but given the popularity of OOP, classes were introduced in ES6. Many other languages, like Java and C++, have always relied heavily on classes. Learning to write classes and design object-oriented code is an important part of being a well-rounded software developer.

The benefit of using OOP is that it will help you organize or encapsulate chunks of related code, such as data and functions, and make your code more reusable and readable overall. As you progress through the rest of the data structures and algorithms curriculum, you will follow the OOP style to implement more complex data structures.

## Class instances

Classes define what properties and functionality the resulting instances will have. A class instance is an object built to the specifications of the class. Although many instances may share a class definition, each one is a unique object.

Classes are abstract creations that represent an idea. For example, an Event class doesn't represent a specific event but rather the idea of events. This is in contrast to an instance of an Event, which describes a specific event.

For example, the Event class would specify that all Event instances which follow from it have the following properties.

- Name
    
- Start time
    
- End time
    
- Location
    

Every event you create is an instance of the class. For example, an instance of the Event class could have the following values.

- Name: Lunch
    
- Start Time: 12:00
    
- End Time: 13:00
    
- Location: Chipotle
    

The table below includes some examples of a class and what an individual instance might look like.

|Class name|Individual instance|
|---|---|
|BoardGame|Name: Photosynthesis; NumberOfPlayers: 2-4|
|Dog|Name: Rufio; Age: 8 months; Breed: Labrador|
|House|Bedrooms: 4; Bathrooms: 3; Type: Tudor; Location: Massachusetts|
|Song|TrackName: Patterns; ArtistName: Steve Gibbs; AlbumName: Adrift|

As you can see in the table above, class names are conventionally written in PascalCase, with each word beginning with a capital letter.

## Class syntax

You can use the keyword class to define a new class. The class definition will start like this.

`class Event {` `// TODO`

`}`

To create a new instance of the Event class, you can use the new keyword and invoke the Event class like a function.

`const lunch = new Event();`

Stored inside of the lunch variable is an empty object that is an instance of the Event class.

### Do this

#### Create a new event

Try running the code above. If you run your code in a Node REPL, you should see the following as output of lunch.

`Event {}`

As you can see, the above is an empty object but has the word Event in front of it. This is showing you that although the object is simply an empty object, it was created from the Event class.

## Constructors

You used the keyword class to define a new class. Classes may have a constructor function.

A constructor is a special function that defines how a new instance of the class is created. In the constructor, you can define the specific properties to be included in the newly created instance.

An example of a constructor function is below, although this constructor function does not set any properties for the resulting instances.

`class Event {` `constructor() {` `console.log("Calling the constructor function!");` `}`

`}`

If you were to create a new instance using the Event class, you would see the following.

`new Event();` `//> Calling the constructor function!`

`//> Event {}`

Each time that you create a new instance of the class, the constructor function is called.

Great job on making it this far in the lesson! So far in this lesson, you've learned how to use classes to define objects and create object instances. Next, you will learn about the this keyword.

### The this keyword

Like other functions, the constructor function is most useful when it has access to parameters that can be used to customize each instance of the class. The values passed in to the constructor function can then be assigned to keys on the this keyword.

The this keyword is used to reference the internals of a specific instance. The this keyword is used most often in class definitions to define how instances of that class should function.

Below is an example of the Event class with a constructor function that accepts four parameters (name, startTime, endTime, and location) and sets each instance's properties to the inputted values.

`class Event {` `constructor(name, startTime, endTime, location) {` `this.name = name;` `this.startTime = startTime;` `this.endTime = endTime;` `this.location = location;` `}`

`}`

You can then create a new event by running the following code:

`const lunch = new Event("Lunch", "12:00", "13:00", "Chipotle");` `console.log(lunch);` `/*` `Event {` `name: "Lunch",` `startTime: "12:00",` `endTime: "13:00",` `location: "Chipotle"` `}`

`*/`

Despite being an instance of the Event class, this object works just like any other. For example, you can use the dot notation to access the startTime and location properties on the lunch instance, like this:

`lunch.startTime; //> "12:00"`

`lunch.location; //> "Chipotle"`

### Do this

#### Create another event

Try creating a new event instance using the class definition above.

`const dinner = new Event("Dinner", "18:00", "19:30");`

Notice that the fourth argument is missing. What's the value for dinner.location, then? Test it out for yourself and see.

## Flexible classes

In the above examples, you've only used strings as values, but any value can be assigned to an individual instance of a class. It's also possible to structure your instances however you like or perform whatever operations you need inside the constructor, since it works just like a regular function except that it is a special function defined on a class.

Here's an example that demonstrates the use of conditional statements inside the constructor:

`class Event {` `constructor(name, attendees, startTime, locationName, address) {` `let guests = null;` `if (attendees.length === 1) {` `guests = attendees[0];` `} else if (attendees.length > 1) {` ``guests = `${attendees.length} attendees`;`` `}` ``this.name = guests ? `${name} with ${guests}` : name;`` `this.details = { startTime, attendees, groupSize: attendees.length };` `this.location = { name: locationName, address };` `}` `}` `const event = new Event("Dinner", ["Sal"], 1830, "Frankie's", "477 Rain St.");` `/*` `Event {` `name: 'Dinner with Sal',` `details: { startTime: 1830, attendees: [ 'Sal' ], groupSize: 1 },` `location: { name: "Frankie's", address: '477 Rain St.' }` `}`

`*/`

## Defining a method

Start with the following Event class.

`class Event {` `constructor(name, startTime, endTime, location) {` `this.name = name;` `this.startTime = startTime;` `this.endTime = endTime;` `this.location = location;` `}`

`}`

As you've seen, the constructor works just like a regular function except it is a special function defined on a class. You can add additional functions or methods to a class definition.

Now, add a toString() method to the Event class.

Method

Any function that can be called from another object

The toString() method will put all the event info into a single string so that it can easily be displayed. A method is defined similarly to a function. You can define it right after the definition of constructor(), like this:

`class Event {` `constructor(name, startTime, endTime, location) {` `// ...` `}` `toString() {` `// TODO` `}`

`}`

Like the constructor() method, the toString() method accesses each instance using the this keyword. Here is the toString() method:

`toString() {` `const { name, startTime, endTime, location } = this;` ``return `${startTime} - ${endTime}: ${name} at ${location}`;``

`}`

const { name, startTime, endTime, location } = this; destructures the properties from each instance into distinct variables that are then used to construct the returned output.

## Calling a method

You can now create an Event class instance called lunchEvent and call the toString() method on lunchEvent, like this:

`const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");`

`console.log(lunchEvent.toString()); // > 12:00 - 13:00: Lunch at Chipotle`

### Do this

#### Use the toString() method

Try copying the code above and create a few different instances of an event. Then, use the toString() method each time. Notice how the toString() method changes depending on what values were given to the constructor function.

## Defining methods with parameters

Now, define the isBefore() method, which takes another instance of the Event class and returns true if and only if the event ends before the other event starts.

This is an outline of what the Event class will look like after the isBefore() method is added:

`class Event {` `constructor(name, startTime, endTime, location) {` `// ...` `}` `toString() {` `// ...` `}` `isBefore(otherEvent) {` `// ...` `}`

`}`

Notice that the isBefore() method takes a parameter otherEvent. This will be another instance of the Event class.

Before defining isBefore(), write a couple of helper methods that will find the hours and minutes of the event, like this:

`getStartHours() {` `return Number(this.startTime.split(":")[0]);` `}` `getStartMinutes() {` `return Number(this.startTime.split(":")[1]);` `}` `getEndHours() {` `return Number(this.endTime.split(":")[0]);` `}` `getEndMinutes() {` `return Number(this.endTime.split(":")[1]);`

`}`

[`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) is a built-in function that converts a string to the Number type.

These new methods should work as follows:

`const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");` `console.log(lunchEvent.getStartHours()); // > 12` `console.log(lunchEvent.getStartMinutes()); // > 0` `console.log(lunchEvent.getEndHours()); // > 13`

`console.log(lunchEvent.getEndMinutes()); // > 0`

Now you can use these methods to define the isBefore() method, like this:

`isBefore(other) {` `return this.getEndHours() < other.getStartHours() || (` `this.getEndHours() === other.getStartHours() &&` `this.getEndMinutes() <= other.getStartMinutes()` `);`

`}`

isBefore() will return true if the current event ends before or right at the start of the other event. Otherwise, it will return false.

To see how this method works, first define another instance of the Event class.

`const meeting = new Event("Meeting", "14:00", "15:30", "Conference room");`

Now you can use the isBefore() method.

`console.log(lunchEvent.isBefore(meeting)); //> true` `console.log(meeting.isBefore(lunchEvent)); // > false`

`console.log(lunchEvent.isBefore(lunchEvent)); // > false`

As you can see from these results, the lunchEvent instance is before meeting, and meeting isn't before lunchEvent.

## Getters

It is common to want to access a value that is not strictly an attribute of a class instance. For example, the Event class saves the startTime and endTime attributes as strings during instantiation. Then, the getStartHours(), getStartMinutes(), getEndHours(), and getEndMinutes() helper methods can be used to derive numbers from these inputs.

Because this is common, there is a special syntax for accessing these attribute-like values, called a getter. A getter is a property that retrieves a value from an object. Instead of using the methods you saw above, you can use getters.

To define a getter, you use the get keyword. Suppose you want to use a getter instead of the getStartHours() method. Inside the Event class, you can replace the method with the following syntax:

`get startHours() {` `return Number(this.startTime.split(":")[0]);`

`12 }`

The method contents remain the same, as you've only changed the method signature. Below, you can see the syntax for the updated class. Note that you can update isBefore() to use the getters. The result is much cleaner.

`class Event {` `21 constructor(name, startTime, endTime, location) {` `22 // ...` `23 }` `24 toString() {` `25 // ...` `26 }` `27 get startHours() {` `28 return Number(this.startTime.split(":")[0]);` `29 }` `30 get startMinutes() {` `31 return Number(this.startTime.split(":")[1]);` `32 }` `33 get endHours() {` `34 return Number(this.endTime.split(":")[0]);` `35 }` `36 get endMinutes() {` `37 return Number(this.endTime.split(":")[1]);` `38 }` `39 isBefore(other) {` `40 return (` `41 this.endHours < other.startHours ||` `42 (this.endHours === other.startHours &&` `43 this.endMinutes <= other.startMinutes)` `44 );` `45 }`

`46}`

After defining the getters, you can access the values the way you would access the attribute of an instance, like this: lunchEvent.startHours. This yields much cleaner code.

Now you can better appreciate how OOP can help you make your code more reusable and readable by grouping related data and functionality into objects. You will use classes to define more complex data structures, such linked lists, stacks, queues, and trees.