import React from "react";

const Questions = () => {
  return (
    <div className="container">
      <h2>1. Difference Between props and state.</h2>
      <h4>
        Props are used to pass data from parent components to child components,
        while state is used to manage data within a component. Props are
        immutable and cannot be changed within a component, while state can be
        updated using the setState method or the useState hook.
      </h4>
      <h2>2. How does useState works?</h2>
      <h4>
        In React, the useState hook is used to add state to functional
        components. The useState hook returns a pair of values: the current
        state value and a function to update it. Such as, Initializing state,
        Updating stateand Re-rendering.
      </h4>
      <h2>3. What else does the useEffect do other than load data?</h2>
      <h4>
        Updating the document title: You can use the useEffect hook to update
        the document title based on the component's state.Setting up event
        listeners: You can use the useEffect hook to set up event listeners that
        respond to user input or other events.Animating elements: You can use
        the useEffect hook to trigger animations when a component mounts or
        updates.Fetching data: As mentioned in the previous answer, useEffect
        can be used to fetch data from an API and update the component's state
        with the results.Managing timers: You can use the useEffect hook to set
        up timers that perform actions at regular intervals.
      </h4>
      <h2>How does react works?</h2>
      <h4>
        React is a JavaScript library that enables developers to build user
        interfaces using reusable components. The library works by creating a
        virtual representation of the user interface, comparing it with the
        previous version to calculate the minimum changes needed to update the
        actual DOM, and applying the changes to the DOM. This process ensures a
        fast and efficient user interface that is always in sync with the
        underlying data and user interactions. React is widely used by
        developers for its flexibility and easy-to-use programming model, and
        can be combined with other libraries and tools to build full-fledged
        applications with advanced functionality and performance.
      </h4>
    </div>
  );
};

export default Questions;
