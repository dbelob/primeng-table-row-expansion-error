import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TableRowExpansionDemo]
})
export class AppComponent {
  title = 'primeng-table-row-expansion-error';
}
