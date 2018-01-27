export default {

  devices: [
    {
      id: 1,
      productName: "IPHONE 6 PLUS 128GB GOLD",
      imei: "354581268954542",
      costumerId: 1
    },
    {
      id: 2,
      productName: "IPHONE 6 PLUS 32GB SILVER",
      imei: "354581268954343",
      costumerId: 2
    },
    {
      id: 3,
      costumerId: 1,
      productName: "IPHONE 7 128GB RED",
      imei: "354895745758955"
    }
  ],
  costumers: [
    {
      id: 1,
      name: "Zé Doido",
      telephoneNumber: "83-98292-3492",
      email: "ze@doido.com.br"
    },
    {
      id: 2,
      name: "Bartolomeu",
      telephoneNumber: "81-97728-2202",
      email: "bartolomeu@junior.com.br"
    }
  ],
  workOrders: [
      {
          id: 1,
          date: '22-01-2018',
          atendant: "Miguel",
          techinician: "Wellington",
          workObjectId: 2,
          objState: "To be repaired",
          typeOfServices: 1,
          useParts: [{1: 2}],
          objLocation: "Drawer1",
          problemDesc: "Screen Cracked",
          problemSol: "Screen Replacement",
          paymentInfo: {
              method: "credit card",
              totalAmount: 350,
              date: '22-01-2018'
          }
      }
  ]
}
