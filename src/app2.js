import $ from 'jquery'
import './app2.css';
//将需要的HTML写入页面
const html=`<div id="app2">
<ol class='tab-bar'><li>1</li>
    <li>2</li>
</ol>
<ol class='tab-content'><li>内容1</li>
    <li>内容2</li>
</ol>
</div>`
const $element=$(html).prependTo($('body>#page'))
//事件触发与处理
const $tabBar=$('#app2 .tab-bar')
const $tabContent=$('#app2 .tab-content')
const app2eq=localStorage.getItem('app2-index')
$tabBar.on('click','li',(e)=>{
    console.log('app2')
    const $li=$(e.currentTarget)
    const index=$li.index()
    localStorage.setItem('app2-index',index)
    $li
    .addClass('selected')
    .siblings().removeClass('selected')
    $tabContent
    .children().eq(index).
    addClass('active').siblings().
    removeClass('active')
})
$tabBar.children().eq(app2eq).trigger('click')