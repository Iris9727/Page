import 'normalize.css'
import './index.scss'
import avatar from './assets/avatar.png'

document.addEventListener('DOMContentLoaded', () => {
  // 显示头像
  const $dom = document.getElementById('js-avatar')
  $dom.src = avatar

  // 绑定交互事件
  const $menuLayout = document.getElementById('js-menu-layout')
  const $menu = $menuLayout.lastChild
  const $menuIcon = $menuLayout.firstChild
  $menuIcon.addEventListener('click', () => {
    if ($menu.classList.contains('fade-in')) {
      $menu.classList.remove('fade-in')
      $menu.classList.add('fade-out')
    } else {
      $menu.classList.add('fade-in')
      $menu.classList.remove('fade-out')
    }
    $menuLayout.classList.toggle('expand')
  })

  document.body.style.display = 'flex'
})
