/*时间转换*/

export const dateTrans = (date: Date) => {
  return date.toLocaleDateString('en-Us', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

export const dateTransMinute = (date: Date) => {
  return date.toLocaleDateString('en-Us', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}
