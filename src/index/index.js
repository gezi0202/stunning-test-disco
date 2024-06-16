import '../index/index.scss'
import"../common/common.scss";
import axios from 'axios'

render( el(".allList") ,'https://zyxcl.xyz/exam_api/zh')
async function render(page , address){
    const res = await axios.get(address)
    console.log(res.data.items);
    page.innerHTML = res.data.items.map((item , i)=>{
        return`
            <dl dataIndex = "${i}">
                <dt><img src="${item.img}" alt=""></dt>
                <dd>
                <p>${item.title}</p>
                <p>月销${item.New}笔</p>
                <p>￥${item.price}</p>
                </dd>
            </dl>
        `
    }).join("")

}
el(".all").addEventListener("click",()=>{
    el(".active").classList.remove("active");
    el(".all").classList.add("active");
    el(".show")&&el(".show").classList.remove("show");
    el(".allList").classList.add("show");
    render( el(".allList") ,'https://zyxcl.xyz/exam_api/zh')
    console.log(123);
})
el(".sold").addEventListener("click",()=>{
    el(".active").classList.remove("active");
    el(".sold").classList.add("active");
    el(".show")&&el(".show").classList.remove("show");
    el(".soldList").classList.add("show");
    render(el(".soldList"), 'https://zyxcl.xyz/exam_api/xl')
    console.log(456);
})
el(".new").addEventListener("click",()=>{
    el(".active").classList.remove("active");
    el(".new").classList.add("active");
    el(".show")&&el(".show").classList.remove("show");
    el(".newList").classList.add("show");
    render(el(".newList") ,'https://zyxcl.xyz/exam_api/sx')
    console.log(789);
})

el("sort")




// document.addEventListener("click",(e)=>{
//     let target = e.target;
//     if(target.nodeName === "DL"){

//     }
// })






function el(el) {
    return document.querySelector(el)
}
function all(el) {
    return document.querySelector(el)
}
