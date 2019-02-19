import './style.css';
import _ from 'lodash';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');

  //Lodash，现在由 import _ from 'lodash'导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的div
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());