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

