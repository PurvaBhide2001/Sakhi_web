const clickToScrollRequiredPlace=(idOfscrollPalce,blockPostion)=>{
    const selector = document.getElementById(idOfscrollPalce);
    selector.scrollIntoView({behavior:"smooth",block:blockPostion});
}