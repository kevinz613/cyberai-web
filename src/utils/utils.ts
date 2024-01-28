
/*根据指定的state,设置和去除类名*/
const htmlElementClass = (state:boolean,className:string,target?:HTMLElement) => {
  const targetEl = target || document.body
  if (state){
    targetEl.classList.add(className)
  }else {
    targetEl.classList.remove(className)
  }
}

export default htmlElementClass
