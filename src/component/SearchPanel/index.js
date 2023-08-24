import React from 'react';

const SearchPanel = () => {

    //только для JS эти имена такие
    //остальные св-ва как и в HTML
    //class-> className
    //for -> htmlFor
    //float - > 
    //Complete = autoComplete
    
      const searchText = '... type here to search';
     // const st = {fontSize: '20px', display: 'flex'}
    
    
    
      //return (<input placeholder='search'/>);
      return (<input 
            placeholder={searchText}
            className={'search-input'}
           // style={st}
            />
            );
    }

    export default SearchPanel;