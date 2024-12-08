Welcome to Node.js v20.14.0.
Type ".help" for more information.
> elements.cheese_powder = {
...     color: "#ffdc54",
...     behavior: behaviors.POWDER,
...     category: "food",
...     state: "powder",
...     reactions: {"oneway_ex": { elem1:dough, elem2:mac_and_cheese, oneway:true },
...     }
... };
Uncaught ReferenceError: elements is not defined
> elements.mac_and_cheese = {
...     color: "#dfb261",
...     behavior: behaviors.POWDER,
...     category: "food",
...     state: "powder",
...     }
Uncaught ReferenceError: elements is not defined
> };
