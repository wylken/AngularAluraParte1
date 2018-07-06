import {Component} from "@angular/core"
import {Http} from "@angular/http"

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent{

    fotos: Object[] = [];

    constructor(http:Http){
        let stream = http.get("v1/fotos");
        stream.subscribe(res => {
            this.fotos = res.json();
            console.log(this.fotos)
        });
    }
}