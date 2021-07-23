import { DocsService } from './../../service/docs.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Documnets } from '../model/documents';

@Component({
  selector: 'app-customer-documents',
  templateUrl: './customer-documents.component.html',
  styleUrls: ['./customer-documents.component.scss']
})
export class CustomerDocumentsComponent implements OnInit {

  id:number;

  constructor(private route:ActivatedRoute,
              private s:DocsService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
  }

  file=new Documnets();
  

  filelist= false;
  fileform= true;
  fileGet:Documnets[];

  selectpancard:any;
  selectaddharcard:any;
  selectphoto:any;
  selectsignature:any;
  selectpostdatedcheck:any;
  selectthumb:any;
  selectbankstatement:any;
  selectitrfile:any;
  selectsalaryslip:any;
  selectpreviousloanstatement:any;

  pancard:any;
    addharcard:any;
    photo:any;
    signature:any;
    postdatedcheck:any;
    thumb:any;
    bankstatement:any;
    itrfile:any;
    salaryslip:any;
    previousloanstatement:any;

  onSelectedFile1(event:any){
    this.selectpancard=event.target.files[0];
 
    console.log(this.selectpancard);
 
    var reader = new FileReader();
 
       reader.readAsDataURL(event.target.files[0]); 
 
       reader.onload = () => { 
         this.pancard = reader.result;}
       }

              onSelectedFile2(event:any){
            this.selectaddharcard=event.target.files[0];
         
            console.log(this.selectaddharcard);
         
            var reader = new FileReader();
         
               reader.readAsDataURL(event.target.files[0]); 
         
               reader.onload = () => { 
                 this.addharcard = reader.result;}
      }
      onSelectedFile3(event:any){
        this.selectphoto=event.target.files[0];
     
        console.log(this.selectphoto);
     
        var reader = new FileReader();
     
           reader.readAsDataURL(event.target.files[0]); 
     
           reader.onload = () => { 
             this.photo = reader.result;}
        }
        onSelectedFile4(event:any){
          this.selectsignature=event.target.files[0];
       
          console.log(this.selectsignature);
       
          var reader = new FileReader();
       
             reader.readAsDataURL(event.target.files[0]); 
       
             reader.onload = () => { 
               this.signature = reader.result;}
     }     
     onSelectedFile5(event:any){
      this.selectpostdatedcheck=event.target.files[0];
   
      console.log(this.selectpostdatedcheck);
   
      var reader = new FileReader();
   
         reader.readAsDataURL(event.target.files[0]); 
   
         reader.onload = () => { 
           this.postdatedcheck = reader.result;}
    }
    onSelectedFile6(event:any){
      this.selectthumb=event.target.files[0];
   
      console.log(this.selectthumb);
   
      var reader = new FileReader();
   
         reader.readAsDataURL(event.target.files[0]); 
   
         reader.onload = () => { 
           this.thumb = reader.result;}
    }
    onSelectedFile7(event:any){
      this.selectbankstatement=event.target.files[0];
   
      console.log(this.selectbankstatement);
   
      var reader = new FileReader();
   
         reader.readAsDataURL(event.target.files[0]); 
   
         reader.onload = () => { 
           this.bankstatement= reader.result;}
    }
    onSelectedFile8(event:any){
      this.selectitrfile=event.target.files[0];
   
      console.log(this.selectitrfile);
   
      var reader = new FileReader();
   
         reader.readAsDataURL(event.target.files[0]); 
   
         reader.onload = () => { 
           this.itrfile = reader.result;}
    }
    onSelectedFile9(event:any){
      this.selectsalaryslip=event.target.files[0];
   
      console.log(this.selectsalaryslip);
   
      var reader = new FileReader();
   
         reader.readAsDataURL(event.target.files[0]); 
   
         reader.onload = () => { 
           this.salaryslip = reader.result;}
    }
    onSelectedFile10(event:any){
      this.selectpreviousloanstatement=event.target.files[0];
   
      console.log(this.selectpreviousloanstatement);
   
      var reader = new FileReader();
   
         reader.readAsDataURL(event.target.files[0]); 
   
         reader.onload = () => { 
           this.previousloanstatement = reader.result;}
    }

    onSubmit(){
      this.file.customerid=this.id;

      console.log(this.file);

      const document1=JSON.stringify(this.file);
      const uploadDocument=new FormData();
      uploadDocument.append('photo',this.selectphoto,this.selectphoto.name);
      uploadDocument.append('thumb',this.selectthumb,this.selectthumb.name);
      uploadDocument.append('addharcard',this.selectaddharcard,this.selectaddharcard.name);
      uploadDocument.append('pancard',this.selectpancard,this.selectpancard.name);
      
      
      uploadDocument.append('signature',this.selectsignature,this.selectsignature.name);
      uploadDocument.append('postdatedcheck',this.selectpostdatedcheck,this.selectpostdatedcheck.name);
      
      uploadDocument.append('bankstatement',this.selectbankstatement,this.selectbankstatement.name);
      uploadDocument.append('itrfile',this.selectitrfile,this.selectitrfile.name);
      uploadDocument.append('salaryslip',this.selectsalaryslip,this.selectsalaryslip.name);
      uploadDocument.append('previousloanstatement',this.selectpreviousloanstatement,this.selectpreviousloanstatement.name);
      uploadDocument.append('doc',document1);
    
      this.s.uploadDocs(uploadDocument).subscribe((data:any)=>{
        this.fileGet=data;
      })
    }


}
