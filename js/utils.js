const log = console.log.bind(console)

//单个选择器
const e = selector => document.querySelector(selector)

// 多个选择器
const es = selector => document.querySelectorAll(selector)

// 插入html
const appendHtml = (element, html) => element.insertAdjacentHTML('beforeend', html)

//查找
const find = (element, selector) => {
    return element.querySelector(selector)
}

//查找所有
const findAll = (element, selector) => {
    return element.querySelectorAll(selector)
}

//事件对象
const EventType = {
    click: 'click',
    popstate: 'popstate',
    mouseover: 'mouseover',
    mouseout: 'mouseout',
    keyup: 'keyup',
}

//事件开关，用于完成与未完成的切换
const toggleClass = (element, className) => {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

//删除html
const removeClassAll = (className) => {
    let selector = '.' + className
    let elements = document.querySelectorAll(selector)
    for (let v of elements) {
        let element = v
        element.classList.remove(className)
    }
}

//向下取整
const floor = num => Math.floor(num)

// 生成 1 到 number 之间的随机整数
const random = num => Math.ceil(Math.random() * num)
 
//当前时间格式化
const now = () => {
    let d = new Date()
    let nm = d.getFullYear()
    let yt = d.getMonth() + 1
    let ri = d.getDate()
    let ui = d.getHours()
    let ff = d.getMinutes()
    let mc = d.getSeconds()

    return `${nm}/${yt}/${ri} ${ui}:${ff}:${mc}`
}

//事件创建时间
const formattedTime = () => {
    let d = new Date()
    let nm = d.getFullYear()
    let yt = d.getMonth() + 1
    let ri = d.getDate()
    let ui = d.getHours()
    let ff = d.getMinutes()
    let mc = d.getSeconds()

    return `${ui}:${ff}:${mc}`
}

 //绑定事件
const bindEvent = (ele, eventName, callback) => {
    ele.addEventListener(eventName, callback)
}


// 给所有的元素绑定事件
const bindAll = (elements, eventName, callback) => {
    for (let v of elements) {
        let element = v
        element.addEventListener(eventName, callback)
    }
}

// const addEvents = (eles, action, callback) => {
//     eles = Array.from(eles)
//     eles.forEach((e) => {
//         e.addEventListener(action, callback)
//     })
// }
//
// const unBindEvent = (ele, action, callback) => {
//     if (Array.isArray(action)) {
//         action.forEach((i) => {
//             ele.removeEventListener(i, callback)
//         })
//     } else {
//         ele.removeEventListener(action, callback)
//     }
// }

//任务事件索引
const todoIdWithIndex = (todoList, id) => {
    let index = -1
    for (let v of todoList) {
        index += 1
        if (v.id = id) {
            break
        }
    }
    return index
}

//当前日期格式化
const nowTime = () => {
    let d = new Date()
    let nm = d.getFullYear()
    let yt = d.getMonth() + 1
    let ri = d.getDate()
    let week = d.getDay()
    let array = ['日', '一', '二', '三', '四', '五', '六']
    let weeks = array[week]
    let time = `${nm}-${yt}-${ri} 星期${weeks}`
    // log('time', time)
    return time
}