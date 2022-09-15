import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  
  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
  }

  addMember(){

    if(!this.newMemberName){
      this.errorMessage = "Name cannot be empty";
      console.log(this.errorMessage);
      return;
    }

    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }
  
  generateTeams(){
    
    
    if(!this.numberOfTeams || this.numberOfTeams <=0 ){
      this.errorMessage = 'Invalid number of teams';
      return;
    }
    
    if(this.members.length < this.numberOfTeams){
      this.errorMessage = 'Not enough members to form teams';
      return;
    }


    this.errorMessage = '';

    const allMembers = [...this.members];

    while(allMembers.length){
      for(let i=0; i<this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const randomnMember = allMembers.splice(randomIndex,1)[0];

        if(!randomnMember)
          break;

        if(this.teams[i]){
          this.teams[i].push(randomnMember);
        } else{
          this.teams[i] = [randomnMember];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';

  }

}
