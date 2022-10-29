export function create(element,className){
    const temp = document.createElement(element)
    temp.classList = className
    return temp;
}