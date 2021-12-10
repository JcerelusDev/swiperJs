const template=document.createElement("template");template.innerHTML="\n<style>\n\n#btncontainer{\nposition:fixed;\nbackground:rgba(255,255,255,0.2);\nwidth:100px;\nheight:100px;\nborder-radius:50%;\nborder:6px double gray;\n}\n\n#btncontainer:before{\ncontent:'';\nposition:absolute;\nbackground:rgba(0,255,0,0.01);\nwidth:30px;\nheight:30px;\nborder-radius:50%;\nborder:6px solid gray;\nleft:27.7%;\ntop:30px;\n}\n\n\n\n\n\n#movable{\nposition:absolute;\nbackground:rgba(0,0,0,0.1);\nwidth:50px;\nheight:50px;\nborder-radius:50%;\ntop:23.3%;\nleft:20.3%;\nborder:3px dotted gray;\n\n}\n\n\n</style>\n";let movable,startX,startY,moveX,moveY,moveLeft=!1,moveRight=!1,moveUp=!1,moveDown=!1;function Swiper(){this.btncontainer=document.createElement("div"),this.movable=document.createElement("div"),movable=this.movable,this.btncontainer.setAttribute("id","btncontainer"),this.movable.setAttribute("id","movable"),this.addContainer=function(e){document.body.appendChild(e)},this.addMovable=function(e){this.btncontainer.appendChild(e)};const e=template.content.cloneNode(!0);document.body.appendChild(e),this.btncontainer.ontouchmove=move,this.btncontainer.ontouchstart=action,this.btncontainer.ontouchend=end}function action(e){e.preventDefault(),startX=e.targetTouches[0].clientX,startY=e.targetTouches[0].clientY}function move(e){moveX=e.touches[0].clientX,moveY=e.touches[0].clientY,movable.style.transition="-300s",startX-20>moveX?(moveLeft=!0,moveRight=!1,moveUp=!1,moveDown=!1,movable.style.left="-1.5px"):startX+20<moveX&&(moveRight=!0,moveReft=!1,moveUp=!1,moveDown=!1,movable.style.left="40px"),startY-20>moveY?(moveUp=!0,moveLeft=!1,moveRight=!1,moveDown=!1,movable.style.top="-1.5px"):startY+20<moveY&&(moveUp=!1,moveLeft=!1,moveRight=!1,moveDown=!0,movable.style.top="40px")}function end(e){movable.style.left="20px",movable.style.top="23px",moveLeft=!1,moveRight=!1,moveUp=!1,moveDown=!1}
