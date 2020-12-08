var yvalue;
var xlabel;
async function func(){
            //from text
            var x=document.getElementById('x').value;
            var y=document.getElementById('y').value;
            var y1=document.getElementById('y1').value;
            var y2=document.getElementById('y2').value;
            var fname=document.getElementById('filename').value;
            fname=fname+'.csv';
            yvalue=[];
            xlabel=[];
            //calling get data for parsing the func
            await getdata();
            //var for pushing data set 
            
            var ctx = document.getElementById('Charts').getContext('2d');

            var arr=[] ;
            
            for(let i=0;i<3;i++){
                console.log(yvalue[i]);
                var obj={
                    fill:false,
                    label: "gloabal avg temperature" ,
                    data: yvalue[i],
                    backgroundColor:['rgba(255, 0, 0, 0.5)'],
                    borderColor:['rgba(255,25,25,0.6)'],
                    borderWidth: 2
                    };
                    arr.push(obj)
            }
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlabel,
        datasets:arr
    }
});
            async function getdata(){
                const res=await fetch(fname);
                const ts=await res.text();
                var table=ts.split('\n');
                const header=table[0];
                const v1=[]
                const v2=[]
                const v3=[]

                table=ts.split('\n').slice(1);
                table.forEach(row=>{
                    const col=row.split(",");
                    const val=parseFloat(col[y])+15;
                    const val1=parseFloat(col[y1])+15;
                    const val2=parseFloat(col[y2])+15;
                    const x1=col[x];
                    xlabel.push(x1);
                    v1.push(val);
                    v2.push(val1);
                    v3.push(val2);
                    
                });
                yvalue[0]=v1;
                yvalue[1]=v2;
                yvalue[2]=v3;
                console.log(yvalue[0]);
            }
            
          console.log(yvalue[0]);  
}


async function reset(){
    window.location.reload();
}