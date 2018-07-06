import {Pipe, PipeTransform} from "@angular/core"
import {FotoComponent} from "../foto/foto.component"

@Pipe({
    name:"filtroPorTitulo"
})

export class FiltroPorTitulo implements PipeTransform{
    transform(fotos: FotoComponent[], digitado:string){
        return fotos.filter(foto => foto.titulo.toUpperCase().includes(digitado.toUpperCase()))
    }
}