

d3.json("samples.json").then(function(data){
    console.log(data);

    var otuId  = data.samples[0].otu_ids.slice(0,10);
    var sampleValues=data.samples[0].sample_values.slice(0,10);
    var sampleLabels= data.samples[0].otu_labels.slice(0,10);

    var trace = {
        x: sampleValues,
        y: otuId,
        type: "bar",
        text:sampleLabels,
        orientation: "h",
        marker:{color: "blue"}
    };
        
    var layout = {
        yaxis:{tickmode:"linear"},
        margin:{}
    };
        Plotly.newPlot('bar', trace ,layout);
    
        var otu = data.samples[0].otu_ids
        var value= data.samples[0].sample_values
        var label = data.samples[0].otu_lables
   
        var trace2 = {
        x:otu,
        y:value,
        mode: "markers",
        marker:{size:value,color:otu},
        text: label

         };
    
         var layout2 = {
             height:500,
             width:800
         }
        Plotly.newPlot('bubble', trace2, layout2);

})
      
// }

