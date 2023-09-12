import api from "../Axios/api";
const ARTICLE_API="articles"
export const fetchArticles=async()=> {
return await api.get(ARTICLE_API);
}

export const fetchArticleById=async(articleId)=> {
    return await api.get(ARTICLE_API + '/' + articleId);
    }
    export const deleteArticle=async(articleId) =>{
    return await api.delete(ARTICLE_API + '/' + articleId);
    }
    export const addArticle=async(article)=> { 
    return await api.post(ARTICLE_API, article);
    } 
    export const editArticle=(article) =>{ 
    return api.put(ARTICLE_API + '/' + article._id, article);
    }
    

