import React,{Component} from 'react';

class Sort extends Component {
  render(){
      return (   
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 sort">
            <div className="btn-group">
              <button   type="button" 
                        className="btn btn-danger dropdown-toggle" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="true"
                >
                Sắp xếp
                <span className="fas fa-sort-down"></span>
              </button>
              <ul   className="dropdown-menu" 
                    aria-labelledby="dropdownMenu1">
                <li>
                    <a  role="button"  
                        className="sort-selected"
                        href="a">
                        <span className="fas fa-sort-alpha-down">A-Z
                        </span>
                    </a>
                </li>
                 <li>
                    <a role="button" 
                        href="a">
                        <span className="fas fa-sort-alpha-down-alt">Z-A</span>
                    </a>
                </li>
                <hr/>
                <li>
                    <a role="button" 
                        href="a"> Ẩn                                  
                    </a>
                </li>
                <li>
                    <a role="button" 
                        href="a">
                        Kích hoạt
                    </a>
                </li>
                </ul>
            </div>
            
        </div>                  
      );
    }
}

export default Sort;
