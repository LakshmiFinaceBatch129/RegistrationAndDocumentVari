import { RelationexecutiveModule } from './../module/relationexecutive/relationexecutive.module';
export class Menu {
  public static menu: Array<any> = [
    {
      admin: [
        {path: "adminbash", title: "adminDashbord", icon: "pe-7s-graph", class: "" },
        {path: "city", title: "city", icon: "pe-7s-graph", class: "" },

    ],
    emp: [
      {path: "empdash", title: "dashbord", icon: "pe-7s-graph", class: "" },
      {path: "demo", title: "Details", icon: "pe-7s-graph", class: "" }

  ],
  inventory: [
    {path: "stock", title: "dashbord", icon: "pe-7s-graph", class: "" },
    {path: "demo1", title: "MyDemo", icon: "pe-7s-graph", class: "" },


],

operationalexecutive : [
 
    {path: "oelogin", title: "dashbord", icon: "pe-7s-graph", class: "" },
    {path: "view", title: "View All Enquiry", icon: "pe-7s-graph", class: "" },
    {path: "new", title: "new Enquiry", icon: "pe-7s-graph", class: "" },
    {path: "viewcustomer", title: "View Customers", icon: "pe-7s-graph", class: "" },
 
    
],
relationexcutive : [
 
  {path: "relogin", title: "dashbord", icon: "pe-7s-graph", class: "" },
  {path: "view", title: "View All Enquiry", icon: "pe-7s-graph", class: "" },
  {path: "new", title: "new Enquiry", icon: "pe-7s-graph", class: "" },
  {path: "viewcustomer", title: "View Customer", icon: "pe-7s-graph", class: "" },
  {path: "customer", title: "Add Customer", icon: "pe-7s-graph", class: "" }
  
]
    }
  ];
}
