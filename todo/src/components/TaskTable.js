import React,{Component} from 'react';
import TableItem from './TableItem'

class TaskTable extends Component {
  render(){
      return (     
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mtl">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input  type="text" 
                                    name="TableInput"  
                                    className="form-control" 
                            />
                        </td>
                        <td>
                            <select name="TableSelectInput"
                                    className="form-control">
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt </option>
                            </select>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <TableItem />
                </tbody>
            </table>
        </div>
      );
    }
}

export default TaskTable;
