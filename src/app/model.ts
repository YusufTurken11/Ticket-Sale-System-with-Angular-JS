export class Model{
    Customers:any;
    Movies:any;
    Sessions:any;
    Saloons:any;
    SoldTicket:any;
    constructor() {
        this.Customers = [];
        //this.Movies = ["JohnWick","Matrix","Batman","Superman","Transformers"];
        this.Movies = [];
        // this.Sessions = [1,2,3,4,5];
        // this.Saloons = [1,2,3,4,5];
        this.SoldTicket = [];
    }

    addCustomer(customer:Customer) {
        this.Customers.push(customer);
    }

    addMovie(movie:Movie) {
        this.Movies.push(movie);
    }

    addSoldTicket(ticket:Ticket){
        this.SoldTicket.push(ticket);
    }
}



export class Customer {
    ID;
    Name;
    Surname;
    Gender;
    constructor(id:any,name:any,surname:any,gender:any){
        this.ID = id;
        this.Name = name;
        this.Surname = surname;
        this.Gender = gender;
    }

}

export class Movie {
    ID;
    Name;
    constructor(id:any,name:any){
        this.ID = id;
        this.Name = name;
    }
}

export class Ticket {
    ID;
    CustomerName;
    MovieName;
    SessionTime;
    SaloonName;
    TicketQuantity;
    Price;
    //TotalPrice;

    constructor(id:any,customername:any,moviename:any,sessiontime:any,saloonname:any,ticketquantity:any,price:any){
        this.ID = id;
        this.CustomerName = customername;
        this.MovieName = moviename;
        this.SessionTime = sessiontime;
        this.SaloonName = saloonname;
        this.TicketQuantity = ticketquantity;
        this.Price = price;
        //this.TotalPrice = totalprice;
    }
}

