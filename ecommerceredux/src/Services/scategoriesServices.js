import api from "../Axios/api";
const SCATEGORIE_API="/scategories"
export const fetchSCategories=async()=> {
return await api.get(SCATEGORIE_API);
}
export const fetchSCategorieById=async(scategorieId)=> {
return await api.get(SCATEGORIE_API + '/' + scategorieId);
}
export const fetchSCategorieByCat=(idcat) =>{ 
return api.get(SCATEGORIE_API + '/cat/' + idcat);
}
export const deleteSCategorie=async(scategorieId) =>{
return await api.delete(SCATEGORIE_API + '/' + scategorieId);
}
export const addSCategorie=async(scategorie)=> { 
return await api.post(SCATEGORIE_API,scategorie);
} 
export const editSCategorie=(scategorie) =>{ 
return api.put(SCATEGORIE_API + '/' + scategorie._id, scategorie);
}
