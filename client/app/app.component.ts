import { Component } from '@angular/core';

import {Auth} from './services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private auth:Auth){
        
    }
}

//import  {TaskService} from './services/task.service'
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h3>Emoodi project</h3>`
 
})

export class AppComponent {}

