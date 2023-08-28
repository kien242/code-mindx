import './App.css';
import './component/Counter/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/Table/index.js';
import FormFloatingBasicExample from './component/form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
function App() {
  const [isShowForm,setIsShowForm]=useState(false);
  return (
    <div className='container'>
      <Button color='primary' onClick={()=>setIsShowForm(!isShowForm)}>show</Button>
      {isShowForm &&       <FormFloatingBasicExample/>}
      <BasicExample/>
    </div>
  );
}

export default App;
