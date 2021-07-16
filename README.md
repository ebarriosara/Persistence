# Persistence

The goal of this repository is to show how to achieve UI persistence with a set of different strategies in React applications.

UI persistence is a functionality that provides the user with the ability to open a dashboard showing it automatically in the same state as it was the last time the user worked on it.

The information needed to restore the application state is stored in the browser local storage, using key/value pairs in JSON format.

Next sections explain the different projects contained in this repository.

## Persistence with redux-persist

If the application uses Redux, then persistence can be easily achieved with [redux-persist](https://github.com/rt2zz/redux-persist) because the Redux store can be saved in the local storage and later recovered.

Starting with the project named [boilerplate](https://github.com/ebarriosara/Persistence/tree/master/boilerplate), created with [Create React App](https://github.com/facebook/create-react-app), the counter value can be persisted as shown in the final project named [redux-persist-example](https://github.com/ebarriosara/Persistence/tree/master/redux-persist-example).

## Persistence with custom middleware

In some cases, it is not possible to use redux-persist because the functionality required by the specified use cases cannot be provided using this 3pp. In this kind of cases, the alternative to redux-persist could be to write a custom middleware.

Starting with the same [boilerplate](https://github.com/ebarriosara/Persistence/tree/master/boilerplate) project as in previous section, counter value is persisted using a custom middleware as shown in the final project named [custom-middleware-example](https://github.com/ebarriosara/Persistence/tree/master/custom-middleware-example).

## Persistence with custom middleware and persistence reducer

In complex applications, the approach explained in previous section is not enough (because the state can contain many reducers with complex structures or it is necessary to make asynchronous API calls to validate the persisted state, etc.) and relying on many actions to update the stated with the persisted information can have uncontrolled side effects.

For that reason, an additional step from previous section is to create a special reducer, persistenceReducer, to merge the persisted state and the current state. To keep consistency, it is not recommended to launch any actions until the persistenceReducer has merged the states.

Starting with the resulting project from previous section, [custom-middleware-example](https://github.com/ebarriosara/Persistence/tree/master/custom-middleware-example), a persistence reducer is added to persist the counter value in [custom-middleware-with-persistence-reducer-example](https://github.com/ebarriosara/Persistence/tree/master/custom-middleware-with-persistence-reducer-example).

## Persisted state validation

In many cases, before merging the persisted and the current states, it is necessary to validate the persisted information. To validate the persisted state, it is usually necessary to make an API call to ensure data consistency. The result of this call will allow us to ignore those parts of the persisted state that are no longer valid.

The example resulting from previous section, [custom-middleware-with-persistence-reducer-example](https://github.com/ebarriosara/Persistence/tree/master/custom-middleware-with-persistence-reducer-example), has been modified to include persisted state validation in [custom-middleware-with-state-validation-example](https://github.com/ebarriosara/Persistence/tree/master/custom-middleware-with-state-validation-example).

## Persistence with Hooks

What if the application does not use Redux? Persistence can be achieved in applications with Hooks and without Redux using React context provider.

Starting with a boilerplate project, [hooks-persistence-boilerplate](https://github.com/ebarriosara/Persistence/tree/master/hooks-persistence-boilerplate), which has been created using [Create React App](https://github.com/facebook/create-react-app), persistence of the counter value has been achieved using React Context provider. The final project is [hooks-persistence-example](https://github.com/ebarriosara/Persistence/tree/master/hooks-persistence-example).