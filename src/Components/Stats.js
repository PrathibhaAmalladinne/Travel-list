export default function Stats({items}){
    if(!items.length)
      return(
      <p className = "stats">
        <em>
          Start adding some items to your Packing list🚀
        </em>
        </p>
      );
  
    const numItems = items.length;
    const numPacked = items.filter(item=>item.packed).length;
    const percent = Math.round((numPacked/numItems)*100);
    return(
      <footer className = "stats">
        <em>
        {percent===100 ? "You are all set for the trip!! YAY✈" :
        `Items: ${numItems} , packed percent: ${percent}%`}
      </em>
      </footer>
    );
  }
  