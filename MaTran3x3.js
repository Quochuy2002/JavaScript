var arr = [[1,1,0],[1,0,1],[0,1,1]];
for(var i=0;i<3;i++){
    var row = "";
    for (var j=0;j<3;j++){
        row +=(arr[i][j]+" ");
    }
    console.log(row);
}