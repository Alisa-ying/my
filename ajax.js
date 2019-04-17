import axios from 'axios';

export default function ajax(url = '', params = {}, type = 'Get') {
    //1,定义一个promise对象
    let promise;
    return new Promise((resolve, reject) => {
        //2，判断请求方式
        if (type === "Get") {
            //2.1如果是GET，请求需要对URL进行处理（URL中参数是：参数名=参数值&参数名=参数值形式）
            let paramsStr = '';
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&';
            })
            //2.2处理掉最后的&
            if (paramsStr !== '') {
                paramsStr = paramsStr.slice(0, paramsStr.length - 1)
                // paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
            }
            //2.3得到URL的完整路径
            url += '?' + paramsStr;
            //2.4进行axios请求
            promise = axios.get(url)
        } else if (type === "POST") {
            promise = axios.post(url, params)
        }

        promise.then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        });
    })

}