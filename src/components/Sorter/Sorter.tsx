import {Button} from "../common/Button/Button";

import './Sorter.css'

export const Sorter = () => {
  return <div className="sorter">
      <Button text="A-Z" type="button" className="sort sorting-a-z"/>
      <Button text="Category" type="button" className="sort sorting-category"/>
      <Button text="Priority" type="button" className="sort sorting-priority"/>
      <Button text="Due Date" type="button" className="sort sorting-dueDate"/>
  </div>
}
