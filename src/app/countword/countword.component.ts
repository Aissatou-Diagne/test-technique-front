import { Component, OnInit } from '@angular/core';
import { CountwordsService } from '../shared/services/countwords.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-countword',
  templateUrl: './countword.component.html',
  styleUrls: ['./countword.component.css']
})
export class CountwordComponent implements OnInit {

  searchForm: FormGroup;
  textArea: FormControl;
  arrayResultatAllMots: any = [];
  array: any = [];
  arraytemp: any = [];
  isAffiche: boolean;
  isbuttonDisable :boolean ; 

  constructor(private countwordsService: CountwordsService, private fb: FormBuilder) {

    this.searchForm = this.fb.group({
      textArea: '',
    });

    this.textArea = fb.control('', [
      Validators.required,

    ]);
  }

  ngOnInit() { 
     
  }

  returnCountWord() {
   
    let textArea = this.searchForm.value.textArea;

    this.countwordsService.countWord(textArea)
      .subscribe((data) => {
        this.arrayResultatAllMots = data;
        for (let entry in this.arrayResultatAllMots) {

          this.arraytemp["id"] = this.arrayResultatAllMots[entry];
          this.arraytemp["occurence"] = entry;

          this.array.push({ id: this.arraytemp["id"], occurence: this.arraytemp["occurence"] });
        }

        if (this.array.length > 0) {
          this.isAffiche = true ; 
        }
       
        this.searchForm = this.fb.group({
          textArea: '',
        });

      });


  };

}
