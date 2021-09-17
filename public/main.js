let n = 1
getPAGE.onclick = () => {
    let request = new XMLHttpRequest()
    request.open ('GET',`/page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status ===200){
                const array = JSON.parse(request.response)
                array.forEach = (item=>{
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n += 1
        }
    }
    request.send()
}
getJSON.onclick = () =>{
    let request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () =>{
        if (request.readyState === 4){
            if (request.status >=200 && request.status <300){
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }else {
                alert('加载JSON失败')
            }
        }
    }
    request.send()
}
getXML.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            } else {
                alert('加载XML失败')
            }
        }
    }
    request.send()
}
getDIV.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('加载DIV失败')
            }
        }
    }
    request.send()
}
getJS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const js = document.createElement('js')
                js.innerHTML = request.response
                document.body.appendChild(js)
            } else {
                alert('加载DIV失败')
            }
        }
    }
    request.send()
}
getCSS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    request.send()
}