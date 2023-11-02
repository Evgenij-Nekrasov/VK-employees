import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         str: "",
      };
   }

   onUpdateSearch = (e) => {
      const str = e.target.value;
      this.setState({ str });
      this.props.onUpdateSearch(str);
   };

   render() {
      const { str } = this.state;

      return (
         <input
            type="text"
            className="form-control search-input"
            onChange={this.onUpdateSearch}
            value={str}
            placeholder="Найти сотрудника"
         />
      );
   }
}

export default SearchPanel;
