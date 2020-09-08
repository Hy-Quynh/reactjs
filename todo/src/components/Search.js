import React,{Component} from 'react';


class Search extends Component {
  render(){
      return (                  
    
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mtl">
            <div className="input-group">
                <input  type="text" 
                        name="FindInput"
                        className="form-control"
                        placeholder="nhập từ khóa"
                />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-primary">
                        <span className="fas fa-search"></span>
                        Tìm kiếm
                    </button>
                </span>
            </div>
        </div>    
      );
    }
}

export default Search;
