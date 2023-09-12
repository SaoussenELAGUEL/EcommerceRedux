import api from "../Axios/api";
const CATEGORIE_API="categories"
export const fetchCategories=async()=> {
return await api.get(CATEGORIE_API);
}
export const fetchCategorieById=async(categorieId)=> {
return await api.get(CATEGORIE_API + '/' + categorieId);
}
export const deleteCategorie=async(categorieId) =>{
return await api.delete(CATEGORIE_API + '/' + categorieId);
}
export const addCategorie=async(categorie)=> { 
return await api.post(CATEGORIE_API,categorie);
} 
export const editCategorie=(categorie) =>{ 
return api.put(CATEGORIE_API + '/' + categorie._id, categorie);
}