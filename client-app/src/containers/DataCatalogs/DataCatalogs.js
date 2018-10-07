import React,{Component} from 'react';
import classes from './DataCatalogs.css'
import {connect} from 'react-redux';

import DataCatalog from './DataCatalog/DataCatalog';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';

class DataCatalogs extends Component{

   componentDidMount(){
       this.props.onFetchCatalogs()
   }

    render(){
        let catalogs = <Spinner/>
        let catalogsArray = []
        if(!this.props.loading){
            
            this.props.catalogs.forEach(value => {
                //console.log(value.metatype)
                let newObj = {}
                catalogs= value.metatype.map(catalog=>(
                    newObj[catalog['id']]= catalog['value']
                ));
              
             catalogsArray.push(newObj) 
            });

            
            console.log(catalogsArray)   
           //console.log(catalogsArray)
           catalogs = catalogsArray.map(catalog =>(
                    <DataCatalog
                    key={Math.random()*100}
                    name= {catalog.name}
                    url = {catalog.url}
                    acronym={catalog.acronym}
                    languagesupported={catalog.languagesupported}
                    description= {catalog.description}
                    economycoverage ={catalog.economycoverage}
                    updatefrequency={catalog.updatefrequency}
                    updateschedule={catalog.updateschedule}
                    lastrevisiondate={catalog.lastrevisiondate}
                    detailpageurl={catalog.detailpageurl}
                    cite={catalog.cite}
                    topics={catalog.topics}
                    contactdetails={catalog.contactdetails}
                    bulkdownload={catalog.bulkdownload}
                    numberofeconomies={catalog.numberofeconomies}
                    type={catalog.type}
                    granularity={catalog.granularity}
                    popularity={catalog.popularity}
                    periodicity={catalog.periodicity}

         />
             ))
         }
        return(
            <div className={classes.DataCatalogs}>
                   {catalogs}
            </div>
        );
       
    }
}

const mapStateToProps = state=>{
    return{
        catalogs: state.cat.catalogs,
        loading: state.cat.loading
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onFetchCatalogs:() => dispatch(actions.fetchCatalogs())
    }
}
export default  connect(mapStateToProps,mapDispatchToProps) (DataCatalogs);
  
