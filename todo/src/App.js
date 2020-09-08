import React,{Component} from 'react';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskTable from './components/TaskTable'
import './App.css';

class App extends Component {
  render(){
      return (
       <div className="container-fluid">
           <h1 className="head">QUẢN LÍ CÔNG VIỆC </h1>
           <hr/>
           <div className="row body">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {/*TaskForm*/}

                    <TaskForm/>                                
                 </div>
                 <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="row">
                        <button type="button" className="btn btn-primary">
                            <span className="fas fa-plus-circle"></span>
                            Thêm công việc           
                        </button>
                    </div>
                   <Control/> 
                    <div className="row">
                        {/*TaskTable*/}
                        <TaskTable/>
                    </div>
                 </div>
            </div>
        </div>

      );
    }
}

export default App;
