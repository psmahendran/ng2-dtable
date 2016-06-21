import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

    name: 'ng2dtGlobalSearch'
})
export class GlobalSearchPipe implements PipeTransform {

    transform(data: any, needle: string) {

        let needle_list = needle.trim().split(' ');
        // console.log(needle_list);

        return data.filter(

            row => {

                let valueArray = Object.keys(row).map(

                    key => { return row[key]; }

                );


                let searchArray = valueArray.filter(value => {

                    return String(value).search(needle) !== -1


                });


                return searchArray.length;
            }

        );
    }

}
