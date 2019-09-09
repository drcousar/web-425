import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cousar-bobs-computer';
  typesOfServices: string[] = [
    'Password Reset ($39.99)', 
    'Spyware Removal ($99.99)', 
    'RAM Upgrade ($129.99', 
    'Software Installation ($49.99)',
    'Tune-up ($80.00)',
    'Keyboard Cleaning ($45.00)',
    'Disk Clean-up ($149.99)'
  ];

  selectedOptions=[];
  selectedOption: any;
  
  onNgModelChange($event){
    console.log($event);
    this.selectedOption=$event;
    
  }

  
}
