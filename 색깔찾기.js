var colors = [['#FFA6FF', '#FFB2F5'], ['#FFB2F5', '#FFA6FF'], ['#997000', '#A57600'], ['#AA730A', '#997000'], ['#00D8FF', '#00D0F5'], 
             ['#00D0F5', '#00D8FF'], ['#A6A6A6', '#ADADAD'], ['#FFE400', '#FFDE05'], ['#FFDE05', '#FFE400'], ['#ABF200', '#B1F700'], 
             ['#B1F700', '#ABF200'], ['#5F00FF', '#4C00FF'], ['#4C00FF', '#5F00FF'], ['#FFE08C', '#FAE296'], ['#FAE296', '#FFE08C'],
             ['#D1B2FF', '#D3AAFF'], ['#D3AAFF', '#D1B2FF'], ['#980000', '#AA1414'], ['#AA1414', '#980000']];
              
var harr = 3;//난이도 (harr × harr)
var min = 1;//분
var sec = 0;//초
var now;
var many = 0;

var min2;
var sec2;
//×
var hp = 5;

var bgBox3 = box().append().size(400, 510).border(0).disableSelection();//전체 박쇼

var startBox = box().appendTo(bgBox3).size('100%').border(0).show();//시작화면 전체 박스 (제목, 시작 버튼, 난이도 선택, 시간 선택)
var testBox = box().appendTo(bgBox3).size('100%').border(0).hide();//게임 화면 전체 박스
var endBox = box().appendTo(bgBox3).size('100%').border(0).hide();//끝났을 때 전체 박스

box().appendTo(startBox).size(30).image('home.png').moveRight(180).border(0).click(clickHome);
box().appendTo(startBox).size('100%', 'auto').text('다른 색깔 찾기', 35).marginTop(0).border(0);//제목
box().appendTo(startBox).size('90%', 80).image("arrow_forward").border(0).marginTop(30).click(start);//시작 버튼



box().appendTo(startBox).size('90%', 'auto').text('난이도 선택', 20, 'black').border(0).marginTop(40);//난이도 선택 글씨

var hardBox = box().appendTo(startBox).size('20%', 'auto').text('3×3', 20).margin(10).marginTop(14).padding('8 0').border(1, 'black');//난이도 글자 나오는 박스

var updownBox = box().appendTo(startBox).size('10%', 'auto').margin(10).marginTop(15);//난이두 올리고 내리기 박스 담는 박스
box().appendTo(updownBox).size('100%', '45%').icon('chevron-up').margin(0).click(clickUp1);// 난이도 올리기 박스
box().appendTo(updownBox).size('100%', '45%').icon('chevron-down').margin(0).click(clickDown1);// 난이도 내리기 박스

var a = box().appendTo(startBox).size('10%', 'auto').color('lightBlue').text('3×3', 10).border(1, 'black', 0).margin(3).marginTop(21).padding('5 0').id(3).click(clickHard);//3×3
var b = box().appendTo(startBox).size('10%', 'auto').text('5×5', 10).border(1, 'black', 0).margin(3).marginTop(21).padding('5 0').id(5).click(clickHard);//5×5
var c = box().appendTo(startBox).size('10%', 'auto').text('10×10', 10).border(1, 'black', 0).margin(3).marginTop(21).padding('5 0').id(10).click(clickHard);//10×10
var d = box().appendTo(startBox).size('10%', 'auto').text('15×15', 10).border(1, 'black', 0).margin(3).marginTop(21).padding('5 0').id(15).click(clickHard);//15×15


box().appendTo(startBox).size('90%', 'auto').text('시간 선택', 20, 'black').border(0).marginTop(20).marginBottom(10);//시간 선택 글자 박스


var minBox = box().appendTo(startBox).size('15%', 'auto').text(1, 20).margin(1).marginTop(4).padding('8 0').border(1, 'black');//분 나오는 글자 박스
var updownBox2 = box().appendTo(startBox).size('10%', 'auto').marginTop(5);//분 올리고 내리기 박스 담는 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-up').margin(0).click(clickUp2);// 부 올리기 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-down').margin(0).click(clickDown2);// 분 내리기 박스
box().appendTo(startBox).size(30).text('분').textSize(30).marginTop(5).border(0).disableSelection().marginRight(15).marginLeft(10);//분 글자(필요×)


var secBox = box().appendTo(startBox).size('15%', 'auto').text(0, 20).margin(1).marginLeft(15).marginTop(4).padding('8 0').border(1, 'black');//초 나오는 글자 박스
var updownBox2 = box().appendTo(startBox).size('10%', 'auto').margin(0).marginTop(5);// 초 올리고 내리기 박스 담는 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-up').margin(0).click(clickUp3);// 초 올리기 박스
box().appendTo(updownBox2).size('100%', '45%').icon('chevron-down').margin(0).click(clickDown3);// 초 내리기 박스
box().appendTo(startBox).size(30).text('초').textSize(30).marginTop(5).border(0).marginLeft(10);//초 글자(필요×)

var e = box().appendTo(startBox).size('25%', 'auto').text('2분 30초', 20).margin(5).marginTop(10).click(clickTime);//2분 30초
var f = box().appendTo(startBox).size('25%', 'auto').text('3분 30초', 20).margin(5).marginTop(10).click(clickTime);//3분 30초
var g = box().appendTo(startBox).size('25%', 'auto').text('4분 30초', 20).margin(5).marginTop(10).click(clickTime);//4분 30초








var hpBox = box().appendTo(testBox).size('58%', '10%');//목숨 담는 박스의
var timeBox = box().appendTo(testBox).size('38%', '10%').textSize(34);//시간 나오는 박스
var imgBox = box().appendTo(testBox).size(382).border(1).marginTop(10);//테스트 나오는 박스
box().appendTo(testBox).size('auto').text('정답 개수:  ', 20).marginTop(15).border(0);//정답개수 글자
var manyBox = box().appendTo(testBox).size('20%', 'auto').text(many + '개', 20).marginTop(15).marginRight(80).border(0);//정답 개수
box().appendTo(testBox).size(40).image('back').marginRight(20).marginTop(15).border(0).click(restart);
box().appendTo(testBox).size('auto').text('pass', 20, 'blue').marginTop(15).border(1, 'black', 25).padding(5).click(pass);//pass







box().appendTo(endBox).size('80%', 'auto').text('끝', 55).marginTop(20).border(0);
box().appendTo(endBox).size('40%', 'auto').text('맞춘 개수:', 25).marginTop(20).border(0);
var resultBox = box().appendTo(endBox).size('40%', 'auto').text(many + '개', 25).align('left').moveRight(30).marginTop(20).border(0);

box().appendTo(endBox).size(160, 200).image('광고!.PNG').margin('20 5 0 0');
box().appendTo(endBox).size(160, 200).image('광고2.PNG').margin('20 0 0 5');

box().appendTo(endBox).size('40%', 'auto').text('색맹 검사 해보기', 15, 'green').margin('0 5').border(0);
box().appendTo(endBox).size('40%', 'auto').text('관찰력 테스트 하기', 15, 'orange').margin('0 5').border(0);

box().appendTo(endBox).size('auto').text('다시 하기', 30).marginTop(30).padding('5 10').moveRight(100).border(2, 'black', 25).click(restart);



function clickHome () {
    windowOpen('http://www.realcoding.co/vvv/qRGCPpRlJYm8WNdIaylwpbWPcgYXrMUv2J55vVCg65Y');
}

function start () {//시작 눌렀을 때
    startBox.hide();
    endBox.hide();
    testBox.show();
    timeBox.timer(onTimer, 1000);
    min2 = min;
    sec2 = sec;
    hp = 5;
    many = 0;
    makeTest();
}

function makeHP () {//목숨 만들기
    hpBox.clear();
    for (var i=0; i<hp; i++) {
        box().appendTo(hpBox).size(30).image('하트.png').margin('0 5').marginTop(8).border(0);
    }
}

function makeTest () {//문제 만들기

    imgBox.clear();
    var answer = random(harr*harr);//랜덤으로 색깔 고르기
    var colo = random(colors.length);
    now = colors[colo];
    var Size = eval(380/harr);
    
    for(var i=0; i<harr*harr; i++) {//만들기
        
        if (i == answer) {//다른것
            box().appendTo(imgBox).size(Size).color(now[1]).border(1, 'white').click(checkAnswer);
        }
        
        else if (i != answer) {//나머지
            box().appendTo(imgBox).size(Size).color(now[0]).border(1, 'white').click(checkAnswer);
        }
    }
    makeHP();
}


function checkAnswer (bx) {
    
    if (bx.color() == now[1]) {
        many++;
        manyBox.text(many + '개');
        makeTest();
    }
    
    else if (bx.color() == now[0]) {
        hp--;
        if (hp<=0) {
            finish();
        }
        
        makeHP();
    }
}



function onTimer () {//시간 가기
    
    if (sec2 <= 0) {//0초가 됐을 때
        
        if (min2 ==0) {//시간이 다 되면
            finish();
            return;
        }
        
        min2--;
        sec2 = 60;
    }
    
    
    sec2--;
    
    if (sec2 < 10) {
        timeBox.text(min2 + ':' + 0 + sec2);
    }
    
    else if (sec2 >=10) {
        timeBox.text(min2 + ':' + sec2);
    }
}

function pass (bx) {
    bx.blink('pink', 1000);
    makeTest();
}

function finish () {//킅났을 때
    startBox.hide();
    testBox.hide();
    endBox.show();
    resultBox.text(many + '개');
}


function restart () {
    timeBox.clearTimer();
    startBox.show();
    testBox.hide();
    endBox.hide();
}


function clickUp1 (bx) {//난이도 올리기 눌렀을 때
    
    bx.blink('DarkTurquoise', 200);//선택한것 깜빡이게
    a.color('white');//일단 모두 색깔 하얗게
    b.color('white');
    c.color('white');
    d.color('white');
    
    if(harr >=15) {//20×20 초과하면 return
        return;
    }
    
    harr++;//난이도 올리기
    
    if (harr == 3) {//옆에 같은게 있으면 옆 박스 색깔 바꾸기
        a.color('lightBlue');
    }
    
    else if (harr == 5) {
        b.color('lightBlue');
    }
    
    else if (harr == 10) {
        c.color('lightBlue');
    }
    
    else if (harr == 15) {
        d.color('lightBlue');
    }
    
    hardBox.text(harr + '×' + harr);//글자 나타내기
}

function clickDown1 (bx) {//난이도 내리기 눌렀을 때
    
    bx.blink('Tomato', 200);//선택한것 깜빡이게
    
    if(harr <=3) {//3×3 미만이면 return
        return;
    }
    
    harr--;//난이도 내리기
    
    a.color('white');//일단 모두 하얗게
    b.color('white');
    c.color('white');
    d.color('white');
    
    if (harr == 3) {//겹치는 것 있으면 색깔 바꾸기
        a.color('lightBlue');
    }
    
    else if (harr == 5) {
        b.color('lightBlue');
    }
    
    else if (harr == 10) {
        c.color('lightBlue');
    }
    
    else if (harr == 15) {
        d.color('lightBlue');
    }
    
    hardBox.text(harr + '×' + harr);//글자로 나타내기
}

function clickHard (bx) {//옆에 난이도 선택했을 때
    a.color('white');//일단 모두 하얗게
    b.color('white');
    c.color('white');
    d.color('white');
    bx.color('lightBlue');//클릭 한 박스 색깔 바꾸기
    
    harr = bx.id();//난이도를 클릭한 박스의 id 로
    hardBox.text(harr + '×' + harr);//글자로 나타내기
}

function clickUp2 (bx) {//분 올리기 눌렀을 때
    
    bx.blink('DarkTurquoise', 200);//선택한것 깜빡이게
    
    if (min >= 5) {//5분 초과이면 return
        return;
    }
    
    min++;//분 올리기
    minBox.text(min);//글자로 나타내기
    
    e.color('white');//밑에 거 모두 하얗게
    f.color('white');
    g.color('white');
    
    if (min == 2 && sec == 30) {//만약 밑에랑 같은게 있으면 색깔 바꾸기
        e.color('PaleGreen');
    }
    
    else if (min == 3 && sec == 30) {
        f.color('PaleGreen');
    }
    
    else if (min == 4 && sec == 30) {
        g.color('PaleGreen');
    }
    
}

function clickDown2 (bx) {//분 내리기 눌렀을 때
    bx.blink('Tomato', 200);//선택한것 깜빡이게
    
    if (min <= 1) {//1분 미만이면 return;
        return;
    }
    
    min--;//분 내리기
    minBox.text(min);//글자로 나타내기
    
    e.color('white');//모두 하얗게
    f.color('white');
    g.color('white');
    
    if (min == 2 && sec == 30) {//만약 밑에랑 겹치면 색깔 바꾸기
        e.color('PaleGreen');
    }
    
    else if (min == 3 && sec == 30) {
        f.color('PaleGreen');
    }
    
    else if (min == 4 && sec == 30) {
        g.color('PaleGreen');
    }
}

function clickUp3 (bx) {//초 올리기 눌렀을 때
    
    bx.blink('DarkTurquoise', 200);//선택한것 깜빡이게
    
    if (sec >= 59) {//60초가 되면 0초로 바꾸기
        sec = -1;
    }
    
    sec++;//초 올리기
    secBox.text(sec);//글자로 나타내기
    
    e.color('white');//밑에거 모두 하얗게
    f.color('white');
    g.color('white');
    
    if (min == 2 && sec == 30) {//밑에랑 겹치는 게 있으면 색깔 바꿔주기
        e.color('PaleGreen');
    }
    
    else if (min == 3 && sec == 30) {
        f.color('PaleGreen');
    }
    
    else if (min == 4 && sec == 30) {
        g.color('PaleGreen');
    }
}

function clickDown3 (bx) {//초 내리기 눌렀을 때
    bx.blink('Tomato', 200);//선택한것 깜빡이게
    
    if (sec <=0) {//0초가 되면 59초로 바꿔지게
        sec = 60;
    }
    
    sec--;//초 내리기
    secBox.text(sec);//글자로 나타내기
    
    e.color('white');//밑에거 모두 하얗게
    f.color('white');
    g.color('white');
    
    if (min == 2 && sec == 30) {//밑에랑 겹치면 색깔 바꿔주기
        e.color('PaleGreen');
    }
    
    else if (min == 3 && sec == 30) {
        f.color('PaleGreen');
    }
    
    else if (min == 4 && sec == 30) {
        g.color('PaleGreen');
    }
}

function clickTime (bx) {//밑에 눌렀을때
    
    e.color('white');//모두 하얗게
    f.color('white');
    g.color('white');
    bx.color('PaleGreen');//선택한것 색깔 바꾸기
    
    if(bx.text() == '2분 30초') {//2분 30초 눌렀을때
        min = 2;
        sec = 30;
        minBox.text(min);
        secBox.text(sec);
    }
    
    else if(bx.text() == '3분 30초') {//3분 30초 눌렀을때
        min = 3;
        sec = 30;
        minBox.text(min);
        secBox.text(sec);
    }
    
    else if(bx.text() == '4분 30초') {//4분 30초 눌렀을때
        min = 4;
        sec = 30;
        minBox.text(min);
        secBox.text(sec);
    }
}