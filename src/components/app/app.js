import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {
               name: "Alex",
               salary: 1000,
               increase: false,
               rise: false,
               id: 1,
            },
            {
               name: "John",
               salary: 2200,
               increase: false,
               rise: false,
               id: 2,
            },
            {
               name: "Sara",
               salary: 4300,
               increase: false,
               rise: false,
               id: 3,
            },
         ],
         str: "",
         nameButton: "all",
      };
   }

   deleteItem = (id) => {
      this.setState(({ data }) => ({
         data: data.filter((item) => item.id !== id),
      }));
   };

   addItem = (name, salary) => {
      const newItem = {
         name,
         salary,
         increase: false,
         rise: false,
         id: uuidv4(),
      };
      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr,
         };
      });
   };

   onToggleProp = (id, prop) => {
      this.setState(({ data }) => ({
         data: data.map((item) => {
            if (item.id === id) {
               return { ...item, [prop]: !item[prop] };
            }
            return item;
         }),
      }));
   };

   searchEmp = (items, str) => {
      if (str.length === 0) {
         return items;
      }

      return items.filter((item) => {
         return item.name.indexOf(str) > -1;
      });
   };

   onUpdateSearch = (str) => {
      this.setState({ str });
   };

   filterEmp = (items, nameButton) => {
      if (nameButton === "rise") {
         return items.filter((item) => item.rise);
      } else if (nameButton === "moreThen1000") {
         return items.filter((item) => item.salary > 1000);
      } else return items;
   };

   onUpdateFilter = (nameButton) => {
      this.setState({ nameButton });
   };

   render() {
      const { data, str, nameButton } = this.state;
      const increase = data.filter((item) => item.increase).length;
      const visibleData = this.filterEmp(this.searchEmp(data, str), nameButton);

      return (
         <div className="app">
            <AppInfo emploees={data.length} increase={increase} />

            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <AppFilter
                  nameButton={nameButton}
                  onUpdateFilter={this.onUpdateFilter}
               />
            </div>

            <EmployeesList
               data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
            />
            <EmployeesAddForm onAdd={this.addItem} />
         </div>
      );
   }
}

export default App;
