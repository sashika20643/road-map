
const tl1=gsap.timeline();


array1=["strcterx","Arrow_1","oop","Arrow_2","sql","Arrow_3","Git","Arrow_x","Arrow_4","mobile","web","Arrow_11","Arrow_9","Arrow_12","Arrow_5","fultter","react","android_studio","html","Arrow_6","boostrap", "Arrow_7", "JS","Arrow_8","Arrow_14","Arrow_13","Arrow_10","Arrow_15","php","Arrow_29","back_end_servise","Arrow_26","Arrow_25","Arrow_17","Arrow_18","Arrow_17","fire_base","lamda","front_end_frame_work","back_end_framework","Arrow_20","Arrow_19","Arrow_21","react_js","anguler","vue","Arrow_23","Arrow_22","Arrow_28","Arrow_27","Arrow_24","laravel","net","Spring_boot","django","Node"]
var xd=1500;
var dur=.2;
for (let i = 0; i < 7; i+=2) {
if(xd==1500){
    xd=-1500;
}
else{
    xd=1500;
}
    

    tl1.from(`#${array1[i]}`, {x:xd,opacity:0, duration:1});

    tl1.from(`#${array1[i+1]}`, {scale:0,opacity:0.1, duration: dur});
}
tl1.from(`#${array1[8]}`, {opacity:0, duration: 1});
tl1.from(`#${array1[9]}`, {x:xd,opacity:0, duration: 1},"someLabel");
tl1.from(`#${array1[10]}`, {x:xd*-1,opacity:0, duration: 1},"someLabel");
tl1.from(`#${array1[11]},#${array1[12]},#${array1[13]},#${array1[14]}`, {opacity:0, duration: 1});
tl1.from(`#${array1[15]},#${array1[16]},#${array1[17]},#${array1[18]}`, {x:xd*-1,opacity:0, duration: 1});
tl1.from(`#${array1[19]}`, {opacity:0, duration: 1});
tl1.from(`#${array1[20]}`, {x:xd,opacity:0, duration: 1});
tl1.from(`#${array1[21]}`, {opacity:0, duration: 1});
tl1.from(`#${array1[22]}`, {x:xd,opacity:0, duration: 1});
console.log(array1[26]);
tl1.from(`#${array1[23]},#${array1[24]},#${array1[25]},#${array1[26]},#${array1[27]}`, {opacity:0, duration: 1});
tl1.from(`#${array1[28]}`, {x:xd,opacity:0, duration: 1});
tl1.from(`#${array1[29]}`, {opacity:0, duration: 1});
tl1.from(`#${array1[30]}`, {x:xd*-1,opacity:0, duration: 1});
tl1.from(`#${array1[31]},#${array1[32]},#${array1[33]},#${array1[34]},#${array1[35]}`, {scale:0, duration: .3});
tl1.from(`#${array1[36]},#${array1[36]},#${array1[37]},#${array1[38]},#${array1[39]}`, {y:1500, duration: 1});
tl1.from(`#${array1[40]},#${array1[41]},#${array1[42]}`, {scale:0, duration: .3});

tl1.from(`#${array1[43]}`, {y:-500,x:-1*xd, duration: 1});
tl1.from(`#${array1[44]}`, {y:1500,x:xd, duration: 1});
tl1.from(`#${array1[45]}`, {y:-500,x:xd, duration: 1});
tl1.from(`#${array1[46]},#${array1[47]},#${array1[48]},#${array1[49]},#${array1[50]}`, {opacity:0, duration: 1});
tl1.from(`#${array1[51]},#${array1[52]}`, {y:-500,x:xd*-1, duration: 1});
tl1.from(`#${array1[53]}`, {y:-1500, opacity:0,duration: 1,});
tl1.from(`#${array1[54]},#${array1[55]}`, {y:-500,x:xd, duration: 1});
