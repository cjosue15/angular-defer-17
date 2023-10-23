import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'name',
    standalone: true
})
export class NamePipe implements PipeTransform {

    transform(value: string): string {

        const splitedWord = value.split(' ');


        return splitedWord.at(0)!.charAt(0).toUpperCase() + splitedWord.at(1)!.charAt(0).toUpperCase()
    }

}