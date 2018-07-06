import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FotoModule} from "./foto/foto.module";
import {HttpModule} from "@angular/http";
import {CardComponent} from "./card/card.component";
import {ListagemComponent} from "./listagem/listagem.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {routing} from "./app.routes";
import {FiltroPorTitulo} from "./listagem/listagem.pipes"


@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule, routing],
    declarations: [AppComponent, CardComponent, ListagemComponent, CadastroComponent, FiltroPorTitulo],
    bootstrap: [AppComponent]
})
export class AppModule{}