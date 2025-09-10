//  export const Base_url = "http://localhost:5000";
 export const Base_url = "https://newshubv2.onrender.com";

export const API_PATHS = {
    Auth:{
        LOGIN:"auth/login",
        REGISTER:"auth/signup",
        GET_INFO:"auth/getuserinfo",
        UPLOAD_IMAGE:"auth/uploadImage"
    },
    News:{
        CREATE:"news/create",
        GET_USER_ARTICLES:"news/getUserArticle",
        DELETE_ARTICLE:(id) =>`news/${id}`,
        EDIT_ARTICLE :(id)=>`news/edit/${id}`,
        GET_ALL_ARTICLES:"news/getArticles",
        GET_ARTICLE_BY_ID:(id)=>`news/article/${id}`,
        COUNT:"news/countArticles"
    }
}