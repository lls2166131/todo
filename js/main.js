//插入当前日期
const timeTile = () => {
    let span = e('.time-tite')
    span.innerHTML = nowTime()
}

//初始化当前日期和加载本地todo
const init = () => {
    timeTile()
    loadTodos()
}

//绑定添加按钮
const bindAdd = () => {
    let span = e('#id-newTodo')
    bindEvent(span, 'click', event => {
        let target = event.target
        // log('click new todo')
        let input = e('#id-input-add')
        let content = input.value
        let time = formattedTime()
        // log('time  add', time)
        insertTodo(content, false, time)
        saveTodos()
        input.value = ''
    })
}

//绑定删除和完成按钮
const bindDelFin = () => {
    let container = e('#id-div-container')
    bindEvent(container, 'click', event => {
        log('click delete or finish')
        let target = event.target
        if (target.classList.contains('todo-delete')) {
            let cell = target.parentElement
            // client remove
            cell.remove()
            // localStorage.todos 中相对应 todo 也删除
            //  save todos 简单操作 实现以上功能
            saveTodos()
        } else if (target.classList.contains('todo-done')) {
            let cell = target.parentElement
            toggleClass(cell, 'done')
            toggleClass(target, 'fa-check-circle-o')
            toggleClass(target, 'fa-circle-thin')
            saveTodos()
        }
    })
}

// 绑定编辑按钮，事件委托
const bindEdt = () => {
    let container = e('#id-div-container')
    bindEvent(container, 'click', event => {
        // log('edit click')
        let target = event.target
        if (target.classList.contains('todo-content')) {
            target.setAttribute('contenteditable', 'true')
            target.focus()
        }  
    })
    container.addEventListener('blur', event => {
        // log('edit blur', event, event.target)
        let target = event.target
        if (target.classList.contains('todo-content')) {
            let cell = target.parentElement
            let content = find(cell, '.todo-content')
            content.setAttribute('contenteditable', 'false')
            saveTodos()
            // 阻止默认行为的发生, 也就是不插入回车
            event.preventDefault()
            saveTodos()
        }
    }, true)
}

//绑定主题
const bindTheme = () => {
    let theme = e('.theme')
    bindEvent(theme, 'click', () => {
        let color = e('.theme-color')
        color.style.height = '180px'
    })

    let above = e('.shou')
    bindEvent(above, 'click', () => {
        let color = e('.theme-color')
        color.style.height = '0px'
    })
}

//绑定黑色主题
const bindBlack = () => {
    let theme = e('#theme-0')
    bindEvent(theme, 'click', () => {
        e('.index').style.background = '#353d40';
        e('.date').style.color = '#353d40';
        e('.list').style.background = 'rgb(64, 72, 75)';
        e('.list').style.color = '#00bff3';
        e('.list-0').style.background = '#2c3032';
        e('.list-0').style.color = '#00bff3';
    })
}

//绑定粉色主题
const bindPink = () => {
    let theme = e('#theme-1')
    bindEvent(theme, 'click', () => {
        e('.index').style.background = 'rgba(242, 70, 70, 0.34)';
        e('.date').style.color = 'rgba(242, 70, 70, 0.34)';
        e('.list').style.background = 'rgba(242, 70, 70, 0.35)';
        e('.list').style.color = 'white';
        e('.list-0').style.background = 'rgba(242, 70, 70, 0.65)';
        e('.list-0').style.color = 'white';
    })
}

//绑定蓝色主题
const bindBlue = () => {
    let theme = e('#theme-2')
    bindEvent(theme, 'click', () => {
        e('.index').style.background = 'rgba(118, 195, 221, 0.73)';
        e('.date').style.color = 'rgba(118, 195, 221, 0.73)';
        e('.list').style.background = 'rgba(118, 195, 221, 0.6)';
        e('.list').style.color = 'white';
        e('.list-0').style.background = 'rgb(100, 194, 226)';
        e('.list-0').style.color = 'white';
    })
}

//绑定颜色主题事件
const bindColor = () => {
    bindBlack()
    bindPink()
    bindBlue()
}

// 绑定所有事件
const bindEvents = () => {
    // add delete finish edit
    bindAdd()
    bindDelFin()
    bindEdt()
    // theme
    bindTheme()
    // color
    bindColor()
}

//主函数
const __main = () => {
    //初始化
    init()
    //绑定事件
    bindEvents()
}
__main()