async function func(){
            var x=document.getElementById('x-axis').value;
            var y=document.getElementById('y-axis').value;
            getdata();
            const xlabel=[];
            const value=[];
            const xyval=[];
            const constant=[];
            var ctx = document.getElementById('Charts').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlabel,
        datasets: [
            {
            fill:false,
            label: "gloabal avg temperature" ,
            data: value,
            backgroundColor:['rgba(255, 0, 0, 0.5)'],
            borderColor:['rgba(255,25,25,0.6)'],
            borderWidth: 2
            },
            {
            fill:false,
            label: "gloabal avg temperature" ,
            data: xyval,
            backgroundColor:['rgba(0, 0, 255, 0.3)'],
            borderColor:['rgba(0,25,255,0.4)'],
            borderWidth: 2
            },
            {
            fill:false,
            label: "global avg constant" ,
            data: constant,
            backgroundColor:['rgba(0, 0, 0, 0.3)'],
            borderColor:['rgba(0,0,0,1)'],
            borderWidth: 3
            }
            ]
    }
});
            async function getdata(){
                const res=await fetch('GLB.Ts+dSST.csv');
                const ts=await res.text();
                var table=ts.split('\n');
                const header=table[0];
                table=ts.split('\n').slice(1);
                table.forEach(row=>{
                    const col=row.split(",");
                    const year=col[x];
                    var temp=col[y];
                    temp=parseFloat(temp)+15;
                    var temp1=col[2];
                    temp1=parseFloat(temp1)+15;
                    xyval.push(temp1);
                    xlabel.push(year);
                    value.push(temp);
                    constant.push(15);
                    console.log(year,temp);
                });
            }
}