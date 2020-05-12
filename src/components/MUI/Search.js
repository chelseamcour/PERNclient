import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;

// var FilteredList = React.createClass({
//     filterList: function(event){
//       var updatedList = this.state.initialItems;
//       updatedList = updatedList.filter(function(item){
//         return item.toLowerCase().search(
//           event.target.value.toLowerCase()) !== -1;
//       });
//       this.setState({items: updatedList});
//     },
//     getInitialState: function(){
//        return {
//          {initialItems}: [
//            "Apples",
//            "Broccoli",
//            "Chicken",
//            "Duck",
//            "Eggs",
//            "Fish",
//            "Granola",
//            "Hash Browns"
//          ],
//          items: []
//        }
//     },
//     componentWillMount: function(){
//       this.setState({items: this.state.initialItems})
//     },
//     render: function(){
//       return (
//         <div className="filter-list">
//           <form>
//           <fieldset className="form-group">
//           <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
//           </fieldset>
//           </form>
//         <List items={this.state.items}/>
//         </div>
//       );
//     }
//   });
  
//   var List = React.createClass({
//     render: function(){
//       return (
//         <ul className="list-group">
//         {
//           this.props.items.map(function(item) {
//             return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//           })
//          }
//         </ul>
//       )  
//     }
//   });
  
//   React.render(<FilteredList/>, document.getElementById('app'));