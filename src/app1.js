import $ from 'jquery'
import './app1.css';
//将需要的HTML写入页面
const html=`
 <div id="app1">
        <div class='output'><span id='number'>100</span></div>
        <div class='actions'>
            <button id='add1'>+1</button>
            <button id='minus1'>-1</button>
            <button id='mul2'>*2</button>
            <button id='divide2'>/2</button>
        </div>
    </div>`
const $element=$(html).prependTo($('body>#page'))
//找到重要元素
const $number=$('#number')
const $add1=$('#add1')
const $minus1=$('#minus1')
const $mul2=$('#mul2')
const $divide2=$('#divide2')
const n=localStorage.getItem('n')
//数据初始化
$number.text(n||100)
//事件绑定
$add1.on('click',()=>{
    let n=parseInt($number.text())
    n+=1
    localStorage.setItem('n',n)
    $number.text(n)
})
$minus1.on('click',()=>{
    let n=parseInt($number.text())
    n-=1
    localStorage.setItem('n',n)
    $number.text(n)
})
$mul2.on('click',()=>{
    let n=parseInt($number.text())
    n*=2
    localStorage.setItem('n',n)
    $number.text(n)
})
$divide2.on('click',()=>{
    let n=parseInt($number.text())
    n/=2
    localStorage.setItem('n',n)
    $number.text(n)
})