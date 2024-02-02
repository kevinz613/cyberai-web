/*当字符串长度超过11，显示省略号*/

export const ellipsis = (value: string) => {
  if (value.length> 11){
    return value.slice(0,11).concat('...')
  }
  return value;
}
