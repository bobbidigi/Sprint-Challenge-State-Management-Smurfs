1. What problem does the context API help solve?


It's aimed at solving the problem of prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is the global application state,
Actions dispatch an action method with type and payload,
Reducers manage the state, by processing the actions, and returns the state as it should be.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global
When having shared state or in a CRUD app. 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it allows us to use async actions


1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context, reducer, and hooks, seems sufficient, but i'm still new to Redux maybe i'm overlooking something.  
