import React,{Component} from 'react';

class TaskForm extends Component {
  render(){
      return (
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Thêm Công Việc
                    <span className="fas fa-minus"></span>
                </h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label>Tên:</label>
                        <input type="text" 
                                className="form-control"
                                name="AddInput"
                                placeholder="Hãy nhập tên công việc" />
                        <label>Trạng thái</label>
                        <select name="StatusInput"
                                className="form-control">
                            <option value={0}>Ẩn</option>
                            <option value={1}>Kích hoạt</option>
                        </select>
                        
                    </div>        
                    <button type="button" className="btn btn-danger">
                    Lưu lại
                    <span className="fas fa-trash-alt ml-15"></span>
                    </button>
                    <button type="button" className="btn btn-warning ml-15">
                    Hủy bỏ
                    <span className="fas fa-chevron-circle-down ml-15"></span>
                    </button>
                </form>
                
            </div>
        </div>                                             
      );
    }
}

export default TaskForm;
