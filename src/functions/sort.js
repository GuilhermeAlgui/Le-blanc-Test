
function sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
   
       return 0;  
    }  
 }


function sortJsonArray(JSONARRAY){

    JSONARRAY.sort(sortByProperty("jogo"))

    return JSONARRAY;


}

export default sortJsonArray;