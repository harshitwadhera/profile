import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';


@Component({
  selector: 'app-skills2',
  templateUrl: './skills2.component.html',
  styleUrls: ['./skills2.component.scss']
})
export class Skills2Component implements OnInit {

  @ViewChild('chart') chart: GoogleChartComponent;

  title = 'My Years Of Experience in given Skills';
   type = 'PieChart';
   data = [
      ['Angular', 3],
      ['Java', 5],
      ['Spring Boot', 3],
      ["Microservices,API's", 2.5],
      ['Hibernate,JPA', 4],
      ['Database', 3],
      ['JSON,XML,XSD', 2],
      ['JSON,HTML,jQuery,JavaScript', 4],
    //   ['IE', 26.8],
   
    //  // ['Chrome', 12.8],
    //   ['Safari', 8.5],
    //   ['Opera', 6.2],
    //   ['Others', 0.7] 
   ];
  // columnNames = ['Browser', 'Percentage'];
   options = { 
    backgroundColor: 'transparent',
    titleTextStyle: {color:'#FFFFFF'}, 
    legend: {
      textStyle: { color: 'white' }
  },
  pieSliceText: 'value',
  tooltip : {
    text: 'value'
  },
 
   };
//  width = 700;
// height = 400;


  constructor() { }

  ngOnInit(): void {
    
  }

  @HostListener("window:resize", ["$event"])
onResize(event) { 
   
  //let selection = this.chart.chartWrapper.draw;
  if(window.innerWidth < 768){
    
    this.options={ backgroundColor: 'transparent',
     titleTextStyle: {color:'#FFFFFF'}, 
     legend: {
       textStyle: { color: 'white' }
   },
   pieSliceText: 'value',
   tooltip : {
     text: 'value'
   },
  
  };
  this.chart.chartWrapper.setOptions(this.options);
  this.chart.chartWrapper.draw();
 
 // console.log(this.chart.options);    
  }else{
    //this.chart.chartWrapper.setOptions(this.options);
  }
 
 // this.introText = window.innerWidth < 768 ? "New" : "Welcome";
}

}
