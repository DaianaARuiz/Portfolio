/*===== SCROLL BTN  =====*/
const d = document,
      w = window;

export function scrollTopButton(btn){
    const $btnScroll=d.querySelector(btn);

    w.addEventListener("scroll",e=>{
        let scrollLimit= w.pageYOffset;
        if(scrollLimit > 250)
        {
          $btnScroll.classList.remove("hidden");
        }else{
            $btnScroll.classList.add("hidden");
        }
    });

    d.addEventListener("click",e=>{
        if(e.target.matches(btn))
        {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

/*===== SCROLL IMG  =====*/
export function removeImgCv(img){
    const $imgCv = d.querySelector(img);

    w.addEventListener("scroll",e=>{
        let scrollLimit= w.pageYOffset;

        if(scrollLimit>300){
            $imgCv.classList.remove("hidden");
        }else{
            $imgCv.classList.add("hidden");
        }
    }); 
}

/*===== SHOW NAVBAR  =====*/ 
export function showNavbar(toggleId, navId, bodyId, headerId){
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show');
            // change icon
            toggle.classList.toggle('bx-x');
            // add padding to body
            bodypd.classList.toggle('body-pd');
            // add padding to header
            headerpd.classList.toggle('body-pd');
        })
    }
}

export function ScrollAnimation(animated){
    const $animated= d.querySelectorAll(animated);
    
    w.addEventListener("scroll",(e)=>{
        let scrollTop=d.documentElement.scrollTop;
        for(var i=0; i<$animated.lenght;i++){
            let animatedHeight=animated[i].offsetTop;
            
            if(animatedHeight<scrollTop)
            {
                $animated[i].style.opacity=1;
            }
        }
    })
}

/*===== BTN MENU  =====*/
export function responsiveBtnMenu(){
    const $divBtnMenu= document.querySelector(".header__toggle"),
        $btnMenu= document.querySelector("#header-toggle"),
        $container=document.querySelector(".container");

    const responsive= (pBtn1,pCont1,pBtn2,pCont2)=>{
        if (window.innerWidth < 768){
            $divBtnMenu.style.paddingLeft= pBtn1;
            $container.style.paddingLeft= pCont1;
        }else{
            $divBtnMenu.style.paddingLeft= pBtn2;
            $container.style.paddingLeft= pCont2;
        }
    }

  responsive("10px","10px","0px","100px");
  $btnMenu.addEventListener('click',()=>{
      if($btnMenu.classList.contains("bx-x")==true){  
         responsive("70px","80px","130px","235px");
      }else{
        responsive("10px","10px","0px","100px");
      }
  });
} 

/*===== LINK ACTIVE  =====*/ 
export function linkActive(link){  
    const linkColor = d.querySelectorAll('.nav__link')
    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
} 



 


