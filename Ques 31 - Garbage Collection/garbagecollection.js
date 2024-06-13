/*
    Garbage Collection in JavaScript is automatically executed.
    1. First it allocates the memory
    2. Use the allocated memory either to read or write or both.
    3. Released the allocated memory when it is no longer required.

    Two types of algorithms used in javascript for garbage collections

    1. Reference-counting garbage collection -
        This is most basic kind of algorithm, whether any resource is
        important or not it scans the memory to determine if an object 
        has any other objects referring to it. An object with zero 
        references is considered to be garbage or "collectible".
    
    2. Mark-and-sweep-algorithm -
        This algorithm modifies the problem statement from the 
        "object being no longer needed" to the object being "unreachable".
        The Garbage collector starts from these roots and finds all the 
        objects that are references from these roots, then all objects
        referenced from these, etc.
*/

//Consider the following example

//Declare an object
var object_1 = {
    object_2: {
        object_3: 7
    }
};

// In this example, creates two objects, one objects is referred by
// another as one of its properties. currently, none can be garbaged
// collected

// The object_4 variable is the second thing has a reference to the
// object

var object_4 = object_1;

// The object that was originally in "object_1" has a unique reference
// emboided by the "object_4" variable
object_1 = 1;

// Reference to "object_2" property of object. This object now has 2
// references: 1 as a property, the other as the "object_5" variable.
var object_5 = object_4.object_2;

// The object that was in "object_1" has now zero reference to it. It
// can be garbaged-collected. However its "object_2" property is still 
// referenced by the "object_5" variable, so it cannot be freed.
object_4 = "Rovid kashyap";

// Now the "object_2" property has no references to it and hence it can
// be garbage collected.
object_5 = null;