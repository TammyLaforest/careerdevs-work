// hotel name
// total number of rooms
// total number rented rooms
// list of amenities
// way for me to find out:
// total rooms available
// total number of rooms

// Call function with format searchHotels(hotels.Ahmni);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var hotels = 
    {
        "Ahmni":
        {    
            name: "Hotel Ahmni",
            totalRooms: 100,
            roomsRented: 37,
            roomsAvailable: function()
                {
                    return this.totalRooms - this.roomsRented;
                },
            amenities: ["Wifi", "laundry", "pool", "gym", "breakfast"]
        },
        Prahv: 
        {
            name: "Hotel Prahv",
            totalRooms: 50,
            roomsRented: 20,
             roomsAvailable: function()
                {
                    return this.totalRooms - this.roomsRented;
                },
            amenities: ["Wifi", "laundry", "pool", "gym"]
        },
        "Mary Yacht": 
        {
            name: "Mary Yacht Hotel",
            totalRooms: 500,
            roomsRented: 200,
             roomsAvailable: function()
                {
                    return this.totalRooms - this.roomsRented;
                },
            amenities: ["Wifi", "laundry", "pool", "gym", "ballroom", "free breakfast", "bar"]
        }
    };

function searchHotel(hotelName){
    console.log(hotelName.name);
    console.log("Rooms available: " + hotelName.roomsAvailable());
    if (hotelName.roomsAvailable() < 1)
    {
        console.log("Sorry, no rooms available at " + hotelName.name +".");
        process.exit();
    }
    else
    {
    rl.question('Would you like to rent a room? ', (answer => { 
        if (answer.toLowerCase() == "n" || answer.toLowerCase() == "no")
        {
            rl.close();
            console.log("Have a great day!");
            process.exit();
        }
        if (answer.toLowerCase() == "y" || answer.toLowerCase() == "yes")
        {
            hotelName.roomsRented += 1;
            console.log("Your room number: " + hotelName.roomsRented);
            console.log("Number of rooms remaining: " + hotelName.roomsAvailable());
            
            rl.question("Would you like to view " + hotelName.name + "'s amenities? ", (reply => { 
                if (reply.toLowerCase() == "y" || reply.toLowerCase() == "yes")
                {
                   rl.close();
                   console.log("Amenities: " + hotelName.amenities);
                   console.log("Enjoy your stay!");
                    return 0;
                } 
                else
                {
                    rl.close();
                    console.log("Enjoy your stay!");
                    return 0;
                }
             }));
        } 
        else 
        {   
            rl.close();
            console.log("Please type a yes or no answer.");
           process.exit();
        }
    }));
    }
}
searchHotel(hotels.Prahv);