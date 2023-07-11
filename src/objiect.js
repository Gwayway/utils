//根据路径判断属性是否空
function emptyObjectProperty(obj, path, ere = 0) {
    let pathArr = path.split('.');
    let inObj = null;
    let p = ''
    for (let i = 0; i < pathArr.length; i++) {
        if (i) {
            inObj = inObj[pathArr[i]]
        } else {
            inObj = obj
        }
        if (!inObj) {
            return ere
        }
    }
    return inObj
}