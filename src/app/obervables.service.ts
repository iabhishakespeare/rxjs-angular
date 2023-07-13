import { Injectable } from '@angular/core'

@Injectable(
)
export class ObservableService{
    count: number =0;
    li: any[]=[]
    constructor(){}
    increment():void{
        this.count+=1;
    }
    addItems(item: any){
        this.li.push(item);
    }
    getItems(){
        return this.li;
    }
}