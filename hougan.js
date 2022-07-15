const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let N = 10;
const W = canvas.width
const H = canvas.height

const masume= document.getElementById("masume")
let BW = new Array(10);

function fresh_change(){
    //console.log(event);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    N = masume.value

    if (N<1){
        N=1;
        masume.value = N;
    }
    if (N>100){
        N=100;
        masume.value = N;
    }
    for (let i=0;i<N+1;i+=1){
        ctx.beginPath();
        ctx.moveTo(0, H/N*i);
        ctx.lineTo(W, H/N*i);
        ctx.closePath();
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(W/N*i, 0);
        ctx.lineTo(W/N*i, H);
        ctx.closePath();
    
        ctx.stroke();
        //ctx.fill();
    }
    
    BW = new Array(N);
    for (let i=0;i<N;i+=1){
        BW[i]=new Array(N);
    }

    for (let i=0;i<N;i+=1){
        for (let j=0;j<N;j+=1){
            BW[i][j]=0;
        }
    }
}

function mouseClick(event){
    const click_x = event.offsetX;
    const click_y = event.offsetY;

    let masu_x=-1;
    let masu_y=-1;


    masu_x=0^(click_x/(W/N));
    masu_y=0^(click_y/(H/N));

    if (masu_x*(W/N)==click_x){
        masu_x=-1;
    }

    if (masu_y*(H/N)==click_y){
        masu_y=-1;
    }

    if (masu_x!=-1 & masu_y!=-1){
        BW[masu_x][masu_y]^=1;

        if (BW[masu_x][masu_y]==1){
            ctx.fillStyle = 'red';
            ctx.fillRect(W/N*masu_x,H/N*masu_y,W/N,H/N);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(W/N*masu_x,H/N*masu_y,W/N,H/N);
        }
        else{
            ctx.fillStyle = 'white';
            ctx.fillRect(W/N*masu_x,H/N*masu_y,W/N,H/N);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(W/N*masu_x,H/N*masu_y,W/N,H/N);
        }
    }
}

fresh_change()
canvas.addEventListener('click', mouseClick);
masume.addEventListener('change', fresh_change);