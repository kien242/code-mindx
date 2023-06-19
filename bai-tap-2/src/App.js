import AppStyle from './App.module.scss';
import * as myFeatures from "./features/Todo/components/TodoItem/index.js"


function App() {
  return (
    <div className={AppStyle.App}>
      <div className={AppStyle.Todo}>
        <myFeatures.TodoImport/>
        <myFeatures.TodoItem todoItemName="Clean up bedroom"/>
        <myFeatures.TodoItem todoItemName="Buy some milk"/>
        <myFeatures.TodoItem todoItemName="Jogging"/>
        <myFeatures.TodoItem todoItemName="Learn React"/>
        <myFeatures.TodoItem todoItemName="Doing Exercises"/>
    </div>
      </div>
  );
}

export default App;
