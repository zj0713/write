// banner
{
	let imgs=document.querySelectorAll(".bn_img li");
	let pagers=document.querySelectorAll(".bb_dian li");
	let banner=document.querySelector(".bn_banner");
	let prev=document.querySelector(".banner_lbtn");
	let next=document.querySelector(".banner_rbtn");

	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});

	let n=0;
	function move(){
		n++;
		if(n === imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	let t=setInterval(move,3000);

	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move, 3000);
	};
	next.onclick=function(){
		move();

	};
	prev.onclick=function(){
		n-=2;
		move();
	};
    // let img=$(".bn_img li");
    // $(".bb_dian li").mouseenter(function () {
		// let index=$(this).index();
    //     $(this).addClass("active").siblings(".active").removeClass("active");
    //     $(img).removeClass("active").eq(index).addClass("active");
    // });
    //
    // let n=0;
    // $(".banner_rbtn").click(function () {
    //     n++;
    //     if(n===img.length){
    //     	n=0;
		// }
    //     $(".bb_dian li").removeClass("active").eq(n).addClass("active");
    //     $(img).removeClass("active").eq(n).addClass("active");
    // });
    //
    // $(".banner_lbtn").click(function () {
    //     n--;
    //     if(n<0){
    //         n=img.length-1;
    //     }
    //     $(".bb_dian li").removeClass("active").eq(n).addClass("active");
    //     $(img).removeClass("active").eq(n).addClass("active");
    // });


}
// 内容模块
{
    let toTop=document.querySelector(".tan");
        toTop.onclick=function () {
            // document.documentElement.scrollTop=0;
            let st=document.documentElement.scrollTop;
            let t=setInterval(function () {
                st-=25;
                if(st<0){
                    st=0;
                    clearInterval(t);
                }
                document.documentElement.scrollTop=st;

            },50);
    };


    let topBar=document.querySelector(".topBar");
    let leftBar=document.querySelector(".leftBar");
    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        if(st>1147){
            topBar.style.display="block";
        }else{
            topBar.style.display="none";
        }

        if(st>2860){
            leftBar.style.display="block";
        }else{
            leftBar.style.display="none";
        }
        document.documentElement.scrollTop=st;
    }


    let tips=document.querySelectorAll(".tip");
    let containers=document.querySelectorAll(".container");
    tips.forEach(function(ele,index){
    	ele.onclick=function(){
    		let ot=containers[index].offsetTop-100;
    		let now=document.documentElement.scrollTop;
    		let speed=(ot-now)/10;
    		let time=0;
    		let t=setInterval(function(){
    			time+=25;
    			now+=speed;
    			if(time===250){
    				clearInterval(t);
    			}
    			document.documentElement.scrollTop=now;
    		},25);
    	}
    });

    window.addEventListener("scroll",function(){
    	let st=document.documentElement.scrollTop;

    	containers.forEach(function(ele,index){

    		if(st>=ele.offsetTop-100){
    			for(let i=0;i<tips.length;i++){
    				tips[i].classList.remove("active");
    			}
    			tips[index].classList.add("active");

    		}

    	})

    });
    // $(".tan").click(function(){
    //     $("html,body").animate({scrollTop:0});
    // });
    // $(window).scroll(function(){
    //     let st=$("html").scrollTop();
    //     if(st>1147){
    //         $(".topBar").show();
    //     }else{
    //         $(".topBar").hide();
    //     }
    //     if(st>2860){
    //         $(".leftBar").show();
    //     }else{
    //         $(".leftBar").hide();
    //     }
    // });
    // $(".tip").click(function(){
    //     let index=$(this).index(".tip");
    //     let ot=$(".container").eq(index).offset().top-80;
    //     $("html,body").animate({scrollTop:ot}, 200);
    // });
    // $(window).scroll(function(){
    //     let st=$(window).scrollTop();
    //     $(".container").each(function(index,ele){
    //         if(st>=$(this).offset().top-80){
    //             $(".tip").removeClass("active").eq(index).addClass("active");
    //         }
    //     });
    // });
}
// 侧导航	
{
	let labels=document.querySelectorAll(".bc_left1");
	let menus=document.querySelectorAll(".banner_list");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}


	})
}
//好货
{
		let hh_1bottom=document.querySelectorAll(".hh_1bottom");
		let pagers=document.querySelectorAll(".phb_dian1");
		let ban=document.querySelector(".hh_bigbottom");
		let left=document.querySelector(".hh_left");
		let right=document.querySelector(".hh_right");

		let n=0;
		right.onclick=function(){
			n++;
			if(n===3){
				n=2;
				return n;
			}
			ban.style.left=n*-390+"px";
			pagers[n-1].classList.remove("active");
			pagers[n].classList.add("active");
			obj=pagers[n];

		}

		left.onclick=function(ele,index){
			n--;
			if(n<0){
				n=0;
				return n;
			}
			ban.style.left=n*-390+"px";
			pagers[n+1].classList.remove("active");
			pagers[n].classList.add("active");
			obj=pagers[n];
		}

		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				n=index;
				ban.style.left=n*-390+"px";
			}

		})
}


//大聚惠
{
	let djhb_left=document.querySelector(".djhb_left");
	let bigdjhb=document.querySelector(".bigdjhb");
	let djh_prev=document.querySelector(".djh_prev");
	let djh_next=document.querySelector(".djh_next");

	djhb_left.onmouseenter=function(){
		djh_prev.style.display="block";
		djh_next.style.display="block";
	}
	djhb_left.onmouseleave=function(){
		djh_prev.style.display="none";
		djh_next.style.display="none";
	}

	let n=1;
	let flag=true;
	djh_next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			bigdjhb.style.transition="all .5s";
			bigdjhb.style.marginLeft=-1000*n+"px";
		}
		
	}

	djh_prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			bigdjhb.style.transition="all .5s";
			bigdjhb.style.marginLeft=-1000*n+"px";
		}
		
	}

	bigdjhb.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			console.log(n);
			bigdjhb.style.transition="none";
			bigdjhb.style.marginLeft="-1000px";
			n=1;
		}

		if(n===0){
			bigdjhb.style.transition="none";
			bigdjhb.style.marginLeft="-3000px";
			n=3;
		}
	});

	
}
//视频
{
	let bigdjhb=document.querySelector(".sx_inner");
	let djh_prev=document.querySelector(".sx_prev");
	let djh_next=document.querySelector(".sx_next");

	let n=1;
	let flag=true;
	djh_next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			bigdjhb.style.transition="all .5s";
			bigdjhb.style.marginLeft=-390*n+"px";
		}
		
	}

	djh_prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			bigdjhb.style.transition="all .5s";
			bigdjhb.style.marginLeft=-390*n+"px";
		}
		
	}

	bigdjhb.addEventListener("transitionend",function(){
		flag=true;
		if(n===3){
			console.log(n);
			bigdjhb.style.transition="none";
			bigdjhb.style.marginLeft="-390px";
			n=1;
		}

		if(n===0){
			bigdjhb.style.transition="none";
			bigdjhb.style.marginLeft="-780px";
			n=2;
		}
	});

}

//乐拼购
{	function shop(parent){
		let img=parent.querySelector(".bqq_img");
		let img2=parent.querySelector(".bqq_img2");
		img.onmouseenter=function(){
			img2.style.display="block";
		};
		img.onmouseleave=function(){
			img2.style.display="none";
		}

	}

	let shopList=document.querySelectorAll(".bq_rb");
	shop(shopList[0]);
	shop(shopList[1]);
	shop(shopList[2]);
    shop(shopList[3]);
    shop(shopList[4]);
    shop(shopList[5]);


	let bq_rightbottom=document.querySelector(".bq_rightbottom");
	let bq_innerbottom=document.querySelector(".bq_innerbottom");
	let bq_prev=document.querySelector(".bq_prev");
	let bq_next=document.querySelector(".bq_next");

	let n=1;
	let flag=true;
	bq_next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			bq_innerbottom.style.transition="all .5s";
			bq_innerbottom.style.marginLeft=-590*n+"px";
		}
		
	};

	bq_prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			bq_innerbottom.style.transition="all .5s";
			bq_innerbottom.style.marginLeft=-590*n+"px";
		}
		
	};

	bq_innerbottom.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			console.log(n);
			bq_innerbottom.style.transition="none";
			bq_innerbottom.style.marginLeft="-590px";
			n=1;
		}

		if(n===0){
			bq_innerbottom.style.transition="none";
			bq_innerbottom.style.marginLeft="-1770px";
			n=3;
		}
	});
	
}
//全部商品分类
{
	$(".dh_left").mouseenter(function () {
		$(".bc_leftBar").show();
    });
    $(".dh_left").mouseleave(function () {
        $(".bc_leftBar").hide();
    });
}