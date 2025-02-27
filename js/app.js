import {author} from './model.js'
document.addEventListener("DOMContentLoaded", () => {
  const authorList = document.querySelector("#authorList");
 
    /* call function object */
  author.readAuthor()
});
