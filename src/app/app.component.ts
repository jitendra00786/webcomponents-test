import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webcomponents-test';
  

  slideIndex:number = 4;


  fSlide(n){
   
    this.showSlides(this.slideIndex = n);
  }
  
    ngOnInit () {  }
  


      showSlides(slideIndex);
  
  
   showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("flowerSlides");
    var dots = document.getElementsByClassName("demo");
    
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
}

 
}
