import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats"

export default function App(){
  const [items,setItems] = useState([]);
  function handleAddItems(item){
    setItems(items=> [...items,item]);
  }
  function handleDeleteItems(id){
    setItems(items.filter((items)=>items.id!== id))
  }
  function handleToggleItem(id){
    setItems(items=>items.map(item=>item.id === id ? {...item,packed : !item.packed} :item))
  }
  function handleClearList(){
    const confirmed = window.confirm("Sure you wanna delete?");
    if(confirmed) setItems([]);
  }

  return(
  <>
<Logo />
<Form onAddItems={handleAddItems} />
<PackingList items = {items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItem} onClearList={handleClearList}/>
<Stats items = {items}/>
</>
  );
}







