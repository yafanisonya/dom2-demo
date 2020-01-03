/*
const api = jQuery('.test')  //返回api对象
api.addClass('red')   //this 就是api
  .addClass('blue')  //链式操作
*/

//jQuery('.test').addClass('red').addClass('green')

// const x = jQuery('.test').find('.children')
// console.log(x)

// jQuery('.test').find('.children').addClass('red')

// const api1 = jQuery('.test1')
// const api2 = jQuery('.test1').find('.children1').addClass('blue')
// api1.addClass('green')

// jQuery('.test').find('.children').addClass('red').end().addClass('green')
// jQuery('.test').each((div) => console.log(div))

jQuery('.test').children().print()