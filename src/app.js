// clase 17: 
//1)aggregation 
//2)paginacion 

const mongoose = require("mongoose");
const OrderModel = require("./models/order.js");
//const dbURI = "mongodb+srv://javier1977:coderhouse@cluster0.mryvwa7.mongodb.net/pizzas?retryWrites=true&w=majority&appName=Cluster0";
//const options = {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//  serverSelectionTimeoutMS: 30000, // Tiempo de espera para la selección del servidor
//  socketTimeoutMS: 45000 // Tiempo de espera para las operaciones de socket
//};

const main =  async () => {
    mongoose.connect("mongodb+srv://javier1977:coderhouse@cluster0.mryvwa7.mongodb.net/pizzas?retryWrites=true&w=majority&appName=Cluster0" )
    //mongoose.connect(dbURI, options)
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));
    
 //const resultado = await OrderModel.find();
 //console.log(resultado);
 //------------------------//
 //ej1) calculamos el totql de pizzas vendidas por sabores/nombres pero de tamaño familiar

 //const resultado = await OrderModel.aggregate([
   // {
//         $match:{
//            tam: "familiar"
//         }
//    },
//    {
//       $group: {
//          _id: "$nombre",
//          total: {
//            $sum: "$cantidad"
//          }
     //  }
    //},

    //ej2)
    //ordenar
   // {
   //     $sort: {
   //         total: -1
            //1: ascendente
            //-1: descendente
  //      }
 //   },
             //guardar los resultados en una ncoleccion "reports"
 //   {
 //      $group: {
   //        _id: 1,
    //       orders: {
                //para guadar los resultados en un arrary puedo usar $push
  //             $push: "$$ROOT"
                // ROOT hace referencia al documento actual
  //          }
 //       }
 //   },
 //   {
        // una vez qu e agrupamos los resultados lo guardamos

 //       $project: {
 //           _id: 0,
 //           orders: "$orders" // el campo "orders" va a ser igual a los rsulatqdos que guardamos en el paso anterior

 //       }
//    },
//    {
   //     $merge: {
       //     into: "reports"
     //   }
   // }    
    
 //])

 //
const resultado = await OrderModel.paginate({"tam": "familiar"}, {limit: 2, page: 2});
console.log(resultado);





};

main();