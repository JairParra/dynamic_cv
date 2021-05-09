// configure for resizing
Chart.defaults.global.responsive = true

/*************************************************************************************************/

/* First Chart: Barplot*/

// create a variable for our chart 
let myChart = document.getElementById('myChart').getContext('2d'); // fetch from canvas 

// variable for population mass 
let massPopChart = new Chart(myChart, {
    type:'bar', // bar, horizontal_par, pie, line, donut, radar, polar area 
    data:{
        labels:['Spanish','English','French','Italian','Portuguese','Mandarin','Japanese','Russian','Korean'], // an array 
        datasets:[{
            label:'Skill level', 
            data: [100, 95, 85, 70, 70, 70, 70, 30, 10],  // array of numbers 
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.2)', 
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)', 
                'rgba(255, 159, 64, 0.2)', 
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderwith: 1, 
            barPercentage: 0.8
        }], 
    },
    options:{
        // scales option 
        scales: {
            xAxes: [{
                display: true, 
                scaleLabel: { 
                   display: true, 
                   fontColor: "#FDFEFE" 
                }, 
                ticks: {
                    beginAtZero: true, 
                    fontColor: "white"
                }, 
                gridLines: { 
                    color: "rgba(242, 242, 242, 0.2)", 
                    zeroLineColor: "#FDFEFE"
                }
            }], 
            yAxes: [{
                display: true, 
                scaleLabel: { 
                   display: true, 
                   fontColor: "#FDFEFE" 
                }, 
                ticks: {
                    beginAtZero: true, 
                    fontColor: "white"
                }, 
                gridLines: { 
                    color: "rgba(242, 242, 242, 0.2)", 
                    zeroLineColor: "#FDFEFE"
                }
            }]
        }, 
        // legend parameters 
        legend: {
            display: false, 
            labels:{ 
                fontColor: 'white'
            }
        }, 
        // assign title 
        title: { 
            display: true, 
            text: "Language Skills", 
            fontColor: "#FDFEFE" 
        }, 
        ticks: {
            //.. Other settings
            callback: function(value, index, values) {
                return ((value / 800) * 100) + '%';
            }
        }, 
        plugins: {
            labels: { 
                render: () => {}, 
                fontColor: "#FDFEFE"
            }
        }
    } // note: {} is an object type in javascript
}); 


/*************************************************************************************************/

/* Second Chart: Pie Chart*/

// create a variable for our chart 
let myChart2 = document.getElementById('myChart2').getContext('2d'); // fetch from canvas 

// variable for population mass 
let massPopChart2 = new Chart(myChart2, {
    type:'pie', // bar, horizontal_par, pie, line, donut, radar, polar area 
    data:{
        labels:['Data Visualization','Machine Learning','Natural Language Processing','Data Engineering','Deep Learning','Data Analysis'], // an array 
        datasets:[{
            label:'Skill', 
            data: [75, 80, 75, 60, 80, 85],  // array of numbers 
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(0, 191, 255, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(0, 191, 255, 1)',
            ],
            borderwith: 1
        }], 
    },
    options:{
        // legend parameters 
        legend: {
            display: false, 
            labels:{ 
                fontColor: 'white'
            }
        }, 
        // labels: { 
        //     render: 'label'
        // }
        // , 
        plugins: { 
            labels: [
                { 
                    render: 'label', 
                    fontColor: "#FDFEFE", 
                    position: 'outside'
                },
                {
                    render: 'percentage', 
                    fontColor: "#FDFEFE",
                }
            ] 
        }, 
        // assign title 
        title: { 
            display: true, 
            text: "Data Science Skills", 
            fontColor: "#FDFEFE" 
        }, 
    } // note: {} is an object type in javascript
}); 



/*************************************************************************************************/

/* Third Chart*/

var marksCanvas = document.getElementById("myChart3");

var marksData = {
  labels: ["Python", "R", "SQL", "Git/Github", "Linux/Bash", "C/C++","HTML5","CSS3/Bootstrap","Javascript/ECS6", "LaTeX","Java"],
  datasets: [{
    label: "Skill Level",
    backgroundColor: "rgba(153,204,255,0.2)",
    data: [90, 80, 80, 80, 70, 40, 80,70,60,90,75]
  }
]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData, 
  options: {
        // legend parameters 
        legend: {
            display: false, 
            labels:{ 
                fontColor: 'white'
            }
        }, 
        // assign title 
        title: { 
            display: true, 
            text: "Programming Languages & Tools", 
            fontColor: "#FDFEFE" 
        },  
        scale: { 
            // change font for every individual label
            pointLabels: { 
                fontColor: "#FDFEFE"
            }, 
            gridLines: { 
                color: 'rgba(255, 255, 255, 0.3)'
            }, 
            angleLines: { 
                display: false
            }
        }
    }
});


/*************************************************************************************************/

/* Fourth Chart*/

// create a variable for our chart 
let myChart4 = document.getElementById('myChart4').getContext('2d'); // fetch from canvas 

// variable for population mass 
let massPopChart4 = new Chart(myChart4, {
    type:'line', // bar, horizontal_par, pie, line, donut, radar, polar area 
    data:{
        labels:['January','February','March','April','May', 'June','July','August','September','October','November','December'], // an array 
        datasets:[
            {
                label:'2020 Git Commits', 
                data: [41, 82, 76, 121, 60, 11, 1, 4, 44, 19, 0, 0], 
                // data: [41, 123, 199, 320, 380, 391, 392, 396, 440, 459, 459, 459],  // array of numbers 
                borderColor: [
                    'rgba(0, 191, 255, 1)',
                ],
                borderwith: 1
            }, 
            {
                label:'2020 MA(2)', 
                data: [41, 61, 79, 98, 90, 35, 6, 2, 24, 31, 9, 0], 
                // data: [41, 82, 121, 170, 212, 242, 263, 280, 298, 314, 355, 389],  // array of numbers 
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderwith: 1
            }, 
            {
                label:'2021 Git Commits', 
                data: [44, 23, 17, 2],  // array of numbers 
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderwith: 1
            },  
            
        ], 
    },
    options:{
        elements: { 
            line: { 
                tension: 0,  // draws straight lines
                fill: false
            }
        }, 
        // scales option 
        scales: {
            xAxes: [{
                display: true, 
                scaleLabel: { 
                   display: true, 
                   fontColor: "#FDFEFE" 
                }, 
                ticks: {
                    beginAtZero: true, 
                    fontColor: "white"
                }, 
                gridLines: { 
                    color: "rgba(242, 242, 242, 0.2)", 
                    zeroLineColor: "#FDFEFE"
                }
            }], 
            yAxes: [{
                display: true, 
                scaleLabel: { 
                   display: true, 
                   fontColor: "#FDFEFE" 
                }, 
                ticks: {
                    beginAtZero: true, 
                    fontColor: "white"
                }, 
                gridLines: { 
                    color: "rgba(242, 242, 242, 0.2)", 
                    zeroLineColor: "#FDFEFE"
                }
            }]
        }, 
        // legend parameters 
        legend: {
            labels:{ 
                fontColor: 'white'
            }
        }, 
    } // note: {} is an object type in javascript
}); 



