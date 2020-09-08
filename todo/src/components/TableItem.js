import React,{Component} from 'react';

class TableItem extends Component {
  render(){
      return (            
        <tr>
            <td>1</td>
            <td>Học lập trình react</td>
            <td>
                <button type="button" className="btn btn-danger">Kích hoạt</button>
            </td>
            <td>
                <button type="button" className="btn btn-warning">Sửa
                    <span className="fas fa-pen"></span>
                 </button>

                <button type="button" className="btn btn-danger">Xóa
                    <span className="fas fa-trash-alt"></span>
                </button>
            </td>
        </tr>
      );
    }
}

export default TableItem;
