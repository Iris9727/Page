import 'normalize.css'
import './index.scss'
import avatar from './assets/avatar.png'

// 显示头像
const $dom = document.getElementById('js-avatar')
$dom.src = avatar

// 绑定交互事件
const $menuLayout = document.getElementById('js-menu-layout')
const $menu = document.getElementById('js-menu')
$menu.addEventListener('click', () => $menuLayout.classList.toggle('expand'))
