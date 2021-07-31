import './app3.css';
import $ from 'jquery'
//将需要的HTML写入页面
const html=`<div id="app3">
<div class="square"></div>
</div>`
const $element=$(html).prependTo($('body>#page'))

//事件触发与处理
const $square=$('#app3 .square')
const app3active=localStorage.getItem("app3localKey")
$square.toggleClass('active',app3active)
$square.on('click',()=>{
    if($square.hasClass('active')){
        $square.removeClass('active')
        localStorage.setItem('app3localKey','no')
    }else{
        $square.addClass('active')
        localStorage.setItem('app3localKey','yes')
    }

    //$square.toggleClass('active')
})