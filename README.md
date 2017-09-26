# Introduction

So now that we've looked at Redux on its own, lets make use of it in a React application.  As we've seen when looking at Redux on its own, React and Redux are two separate pieces of software, but they function exceptionally well together.  React is a UI framework, and Redux is a data store.  Combined, they make a complete front end framework, enabling us as developers to write flexible, scalable, and composable applications.

![redux flow](https://s3.amazonaws.com/learn-site/curriculum/redux/redux-flow.jpeg)

## The Provider component

The ```<Provider store={store} />``` component is provided by the react-redux NPM package.  It's a component, like any other in React, and has one important responsiblity.  Its job is to provide access to the store to any nested components via props.  

## The connect function
```connect()``` is a curried that we use to map parts of the Redux store to the components.  Most all the components we write don't need to draw data from the entire store, so we use ```connect()``` to expose just the ones we want to use.  It may be useful to think of ```connect()``` as a box that we put the component in to make it aware of Redux.

## this.props.dispatch()
One of the things provided to a component when we use connect is the dispatch action that we use to dispatch actions back to the Redux store.  Notice here that firing off an action, and updating of the UI are decoupled.  They are two completly separate events in the cycle of React and Redux.  When the component knows how to fire off actions, and it knows that it will eventually be updated with a new state from the store, but what happens inbetween is outside of the concern of the component itself.  The actions may need to go and fetch data from a server, or do any number of other things to update the state of the application, all of which the component can remain blissfully ignorant of.  React is a UI framework.  Its concern is to provide a great UI for the user.  Redux handles the complex business logic of your application.
