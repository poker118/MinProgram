Page({
  data: {
    name:'Coderwhy',
    age: 20,
    students:[
      { id: 110, name: 'kobe', age: 30 },
      { id: 111, name: 'james', age: 28 },
      { id: 112, name: 'lucy', age: 22 },
      { id: 113, name: 'kate', age: 40 },
    ],
    counter: 0
  },

  ButtonPlus(){
    //1.错误的做法--界面不会刷新
    //this.data.counter += 1,

    this.setData({
      counter: this.data.counter + 1
    })
  },

  ButtonMinus(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})

