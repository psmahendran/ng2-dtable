import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    
    name:'ng2dtMapToIterable'
})
export class MapToIterablePipe implements PipeTransform{
    
    transform(data){
        
       return Object.keys(data).map(
            key=>{return data[key];}
        );
    }
    
}