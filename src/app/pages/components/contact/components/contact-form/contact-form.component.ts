import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../../models/contact';
import {SharedService} from '../../../../../shared/services/shared.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppToastService} from '../../../../../services/toast.service';
import {ApiResponse} from '../../../../../models/apiresponse';
import {ValidationService} from '../../../../../services/validation.service';
import {ContactService} from '../../services/contact.service';
import {Guid} from 'guid-typescript';
import {TypeData, ContactNumber} from '../../models/contactNumber';
import {ContactNumberService} from '../../services/contactNumber.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  contact = {} as Contact;
  globalError: string;
  typeData = TypeData;
  contactNumber = {} as ContactNumber;
  listcontactNumber = [] as ContactNumber[];
  editContactNumber = false;

  constructor(private sharedService: SharedService,  private activeRoute: ActivatedRoute,
              private router: Router,  private validationService: ValidationService,
              private toastService: AppToastService, private contactService: ContactService,
              private contactNumberService: ContactNumberService) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id != null && id !== undefined) {
        this.contactService.get(id).subscribe((result: ApiResponse<Contact>) => {
          this.contact = result.data;
          this.sharedService.menuTitle = 'Edición de Usuario';
          this.defineFormGroup();
          this.getContactNumbers(id);
        });

    } else {
      this.sharedService.menuTitle = 'Creación de Usuario';
      this.defineFormGroup();
    }
  }

  getContactNumbers(id: string): void{
    this.contactNumberService.grid(id).subscribe((data: ApiResponse<ContactNumber[]>) => {
      this.listcontactNumber = data.data;
    });
  }

  defineFormGroup(): void {
    this.contactForm = new FormGroup({
      Id: new FormControl(this.contact?.Id ? this.contact.Id : '', ),
      Name: new FormControl(this.contact?.Name ? this.contact.Name : '', [Validators.required]),
      LastName: new FormControl(this.contact?.LastName ? this.contact.LastName : '', [Validators.required]),
      Email: new FormControl(this.contact?.Email ? this.contact.Email : '', [Validators.email]),
    });
  }

  saveForm(): void{
    this.globalError = '';
    if ( this.contactForm.valid ) {
      this.contact = this.contactForm.value;
      if (this.contact.Id === undefined || this.contact.Id === '') {
        this.contact.Id = Guid.create().toString();
        for (const x of this.listcontactNumber) {
            x.ContactId = this.contact.Id;
        }
        this.contact.Numbers = this.listcontactNumber;
        this.contactService.create(this.contact).subscribe((result: ApiResponse<string>) => {
          this.cancelForm();
        });
      } else{
        this.contactService.update(this.contact).subscribe((result: ApiResponse<string>) => {
           this.cancelForm();
        });
      }
    } else {
      this.globalError = 'Verifique los campos requeridos';
      this.toastService.showError(this.globalError);
      this.validationService.validateAllFormFields(this.contactForm);
    }
  }

  cancelForm(): void{
    this.router.navigate(['/pages/contact']);
  }

  deleteNumber(id: number, item: ContactNumber): void {
    if (this.contact.Id === undefined || this.contact.Id === '') {
      const index = this.listcontactNumber.indexOf(item);
      if (index > -1) {
        this.listcontactNumber.splice(index, 1);
      }
    }else{
      this.contactNumberService.delete(id);
      this.getContactNumbers(this.contact.Id);
    }
  }

  editNumber(item: ContactNumber): void{
     this.contactNumber.Id = item.Id;
     this.contactNumber.ContactId = item.ContactId;
     this.contactNumber.Value = item.Value;
     this.contactNumber.Name = item.Name;
     this.editContactNumber = true;
  }

  updateNumber(): void{
    this.editContactNumber = false;
    this.contactNumberService.update(this.contactNumber).subscribe((result: ApiResponse<string>) => {
      this.contactNumber.Value = '';
      this.getContactNumbers(this.contact.Id);
    });

  }

  addNumber(): void{
    if (this.contact.Id === undefined || this.contact.Id === '') {
      const temp = {} as ContactNumber;
      temp.Value = this.contactNumber.Value;
      temp.Name = this.contactNumber.Name;
      this.contactNumber.Value = '';
      this.listcontactNumber.push(temp);
    } else {
      const temp = {} as ContactNumber;
      temp.Value = this.contactNumber.Value;
      temp.Name = this.contactNumber.Name;
      temp.ContactId = this.contact.Id;
      this.contactNumberService.create(temp).subscribe((result: ApiResponse<string>) => {
        this.listcontactNumber.push(temp);
      });
   }
  }
}
