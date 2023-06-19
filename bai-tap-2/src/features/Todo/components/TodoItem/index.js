import styles from './todoItemStyles.module.scss';
import "bootstrap/dist/css/bootstrap.min.css"


export const TodoItem=(props) => {
  return (
    <div className={styles.TodoItem}>
      <input className={`form-check-input ${styles.todoCheckbox}`} type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
      <label className="form-check-label" htmlFor="flexRadioDefault1">{props.todoItemName}</label>
    </div>
  )
};

export const TodoImport=() =>{
  return (
    <div>
      <input type="text" className="form-control form-control-lg" placeholder="Enter your task here ..." />
    </div>
  )
}

