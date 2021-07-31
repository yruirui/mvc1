import $ from 'jquery'
import './app4.css'
//将需要的HTML写入页面
const html=`<div id="app4">
<div class="circle"></div>
</div>`
const $element=$(html).appendTo($('body>#page'))
//事件触发与处理
const $circle=$('#app4 .circle')
$circle.on('mouseenter',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})