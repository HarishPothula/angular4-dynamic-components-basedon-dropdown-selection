# UPDATE

``` typescript
// You are giving `*ngIf="selctedElementalType"` which is true if some value is there for this variable. 
// But condition should be like  `*ngIf="selctedElementalType='XXX'"` where XXX is the option from elementalTypes

  <div *ngIf="selectedSection=='BasicInfo'">
    <h1>this is Basic Information section without component</h1>
  </div>
  

  <div *ngIf="selectedSection=='AddressInfo'">
    <h1><i>address information section!</i></h1>
  </div>
  ```
  ## As your elementalTypes are coming form server, they are dynamic. So wecan do like this
  
  ```typescript
  <div *ngFor="let section of sections">
    <div *ngIf="selectedSection==section">
      <h1>this is <i>{{section}} Content</i></h1>
    </div>
  </div>
  ```
  
  ### You can tweak your code based on above snippet - It might become like this
  
  ```typescript
  <div *ngFor="let option of elementalTypes">
    <div *ngIf="selectedElementType==option">
      <h1>this is <i>{{option}} Content </i></h1>
      
    </div>
  </div>
  ```
  

<hr>
<hr>
  
## Dynamically Displaying Component Based On A DropDown

### Base Logic:

```typescript
<a-component *ngIf="conditionVar=='a'"></a-component>
<b-component *ngIf="conditionVar=='b'"></b-component>
```

### Note: Don't forget to add 'FormsModule' to `imports` array in app.module.ts i.e.

```
...
import { FormsModule } from '@angular/forms';
...

\@NgModule({
  declarations: [
    AppComponent,
    BasicComponent, // Our dummy component - 1 
    AddressInfoComponent // Our dummy component - 2

],
  imports: [
    BrowserModule   ,
    FormsModule // This is needed as we are using select tag which is a form element
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
