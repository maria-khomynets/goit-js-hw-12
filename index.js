import{a as c,S as u,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const p=15;async function d(e,a=1){return(await c("https://pixabay.com/api/",{params:{key:"55699245-ea32969c729087c9356aa5786",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:p}})).data}let n=null;function f(e){const a=document.querySelector(".gallery"),o=e.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>

        <ul class="item-indicators">
          <li>
            <h2>Likes</h2>
            <p>${r.likes}</p>
          </li>
          <li>
            <h2>Views</h2>
            <p>${r.views}</p>
          </li>
          <li>
            <h2>Comments</h2>
            <p>${r.comments}</p>
          </li>
          <li>
            <h2>Downloads</h2>
            <p>${r.downloads}</p>
          </li>
        </ul>
      </li>
    `).join("");a.insertAdjacentHTML("beforeend",o),n||(n=new u(".gallery-item a",{captionsData:"alt",captionPosition:"bottom"})),n.refresh()}function m(){const e=document.querySelector(".gallery");e.innerHTML=""}function h(){const e=document.querySelector(".loader-wrapper");e&&e.classList.add("loader-wrapper-show")}function g(){const e=document.querySelector(".loader-wrapper");e&&e.classList.remove("loader-wrapper-show")}const y=document.querySelector(".form");y.addEventListener("submit",L);function L(e){e.preventDefault();const a=e.target.elements["search-text"].value.trim();if(!a){l.show({title:"Warning",message:"The form field must be filled in.",backgroundColor:"pink",position:"topLeft",timeout:8e3});return}m(),h(),d(a).then(o=>{var r;(r=o==null?void 0:o.hits)!=null&&r.length?f(o.hits):l.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"pink",position:"topLeft",timeout:8e3}),e.target.reset()}).catch(o=>{l.error({message:o.message,position:"topLeft",timeout:8e3})}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
