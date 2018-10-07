import React from 'react';
import classes from './DataCatalog.css';

const DataCatalog = (props) =>{

    let stripeTags = props.description.replace(/<\/?[^>]+>/gi, '')
     return(
        <div className={classes.DataCatalog} >
            <a href={props.url} target="_blank" rel="noopener noreferrer"><h3 className={classes.Heading}>{props.name} ({props.acronym})</h3></a>
            <p>{stripeTags}</p>
            <a href={props.detailpageurl} target="_blank" rel="noopener noreferrer"><button >View Details</button></a>
        </div>
     )
        
      
    
};

export default DataCatalog;