import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="row text-xs-center">
    <br><h1> Om Arrow Game System</h1><br>
    <p>
    <em>Arrow Game System</em> är ett enkelt, fartfyllt och intuitivt regelsystem för alla typer av kampanjvärldar!
    </p>
    <p>
    Systemet passa spelgrupper som vill lägga fokus på action och berättande istället för att slå i tabeller och 
    rulla ett oändligt antal tärningar.
    </p>
    <p>
    Hjärnorna bakom Arrow Game System är: Mikael <em>"Budbäraren"</em> och Jimmy <em>"Kolportören"</em> Pihl.
    Bröderna är erkända och uppskattade rollspelsprofiler i Stockholms Söderort.
    </div>
  `
})
export class AboutComponent { }
