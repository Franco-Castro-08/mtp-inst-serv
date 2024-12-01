import { useFetch } from "../hooks/useFetch";

const SelectList = (title,url,handleChange) =>  {

    const {data,error,loading} = useFetch(url);

    console.log(data,error,loading);

    if(!data) return null;
   /*
     if(error){
      return <Massage msg={`Error ${error.status}: ${error.statusText} 
      bgColor="dc3545"`}
      />
     }
   */

    let id = `select-${title}`;
    let label = title.charAt(0).toUpperCase() + title.slice(1); 
    let options= data.response[title];
    console.log(options);

    return(
        <>
             <label htmlFor={id}>{label}</label>
             
            <select name={id} id={id} onChange={handleChange}>
              <option value="">Elige un {title}</option>
              {data && options}
            </select>
        </>
    )
};

export default SelectList;