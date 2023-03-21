import { Component } from '@angular/core';
import { Model, Customer, Movie, Ticket } from '../model';

@Component({
  selector: 'app-rezervation',
  templateUrl: './rezervation.component.html',
  styleUrls: ['./rezervation.component.css']
})
export class RezervationComponent {
  
  model = new Model();
  customerID = 0;
  ticketID = 0;
  movieID = 0;
  ticketPrice:any;
  totalPrice:any;
  //ticketPrice = 100;

  addCustomer(name:any,surname:any,gender:any){
    if(name === "" || surname === "" || gender === "--Select gender--"){
      alert("Lütfen Formu Eksiksiz Doldurun");
    }else{
      this.customerID++;
      let customer = new Customer(this.customerID,name,surname,gender);
      this.model.addCustomer(customer);
    }
  }

  addMovie(name:any){
    if(name === ""){
      alert("Lütfen Formu Eksiksiz Doldurun");
    }else{
      this.movieID++;
      let movie = new Movie(this.movieID,name);
      this.model.addMovie(movie);
    }
  }

  addSoldTicket(customername:any,moviename:any,sessiontime:any,saloonname:any,ticketPrice:any,ticketquantity:any){
    if(customername === "" || moviename === "--Select Movie--" || sessiontime === "--Select Session--" || saloonname === "--Select Saloon--" || ticketquantity === "" || ticketPrice === 0){
      alert("Lütfen Formu Eksiksiz Doldurun");
    }else{
      this.ticketID++;
      let ticket = new Ticket(this.ticketID,customername,moviename,sessiontime,saloonname,ticketquantity,ticketPrice)
      this.model.addSoldTicket(ticket)
    }
  }




  getCustomerList(){
    return this.model.Customers;
  }

  getMovieList(){
    return this.model.Movies;
  }

  getTicketList(){
    return this.model.SoldTicket;
  }

  cancelButton(item:any){
    let arrayLenght = this.model.SoldTicket.length;

    for (let i = 0; i < arrayLenght; i++) {
      if (this.model.SoldTicket[i].ID === item) {
        return this.model.SoldTicket.splice(i, 1);
      }
    }
  }
}