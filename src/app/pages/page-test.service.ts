import { Injectable } from '@angular/core';
import { CustomTemplate, CustomTemplate2 } from './overview/custom.template';
import { AnyAppControl } from '@anyapp/components';

@Injectable({
    providedIn: 'root'
})
export class PageTestService {
    constructor() {
    }

    overviewSettings: any = {
        gebruikers: {
            title: 'Gebruikers',
            subTitle: 'Overzicht van alle gebruikers',
            templates: {
                header: undefined,
                content: CustomTemplate,
                footer: undefined,
            },
            data: [
                { id: 1, title: 'm.kelder@itension.nl', description: 'Maarten Kelder', icon: 'face' },
                { id: 2, title: 'r.boer@itension.nl', description: 'Robert Boer', icon: 'face' },
                { id: 3, title: 'd.vdmeulen@itension.nl', description: 'Dennis van der Meulen', icon: 'face' },
                { id: 4, title: 'w.veltman@itension.nl', description: 'Wouter Veltman', icon: 'face' },
                { id: 5, title: 'g.stappenbelt@itension.nl', description: 'Gerjan Stappenbelt', icon: 'face' },
                { id: 6, title: 'etc', description: null, icon: null }
            ]
        },
        rechten: {
            title: 'Rechten',
            subTitle: 'Overzicht van alle rechten',
            templates: {
                header: undefined,
                content: CustomTemplate2,
                footer: undefined,
            },
            data: [
                { id: 1, title: 'Recht_Gebruikers', description: 'Rechten om gebruikers te beheren', icon: null, actief: true },
                { id: 2, title: 'Recht_Gebruikersgroepen', description: 'Rechten om gebruikersgroepen te beheren', icon: null, actief: true },
                { id: 3, title: 'Recht_Administraties', description: 'Rechten om administraties te beheren', icon: null, actief: false },
                { id: 4, title: 'Recht_Boekjaren', description: 'Rechten om boekjaren te beheren', icon: null, actief: true },
                { id: 5, title: 'Recht_Widgets', description: 'Rechten om widgets te beheren', icon: null, actief: false },
                { id: 6, title: 'etc', description: null, icon: null, actief: false }
            ]
        }
    };

    detailSettings: any = {
        gebruikers: {
            title: 'Gebruiker',
            subTitle: 'Gebruiker detail gegevens',
            data: {},
            controls: [
                new AnyAppControl('id', '', 'input', null, { placeholder: 'ID', disabled: true}),
                new AnyAppControl('title', '', 'input', null, { placeholder: 'Email adres', required: true, hint: 'Email adres van de gebruiker', type: 'email'}),
                new AnyAppControl('description', '', 'input', null, { placeholder: 'Naam', hint: 'Naam  van de gebruiker'}),
            ]
        },
        rechten: {
            title: 'Recht',
            subTitle: 'Recht detail gegevens',
            data: {},
            controls: [
                new AnyAppControl('id', '', 'input', null, { placeholder: 'ID', disabled: true}),
                new AnyAppControl('title', '', 'input', null, { placeholder: 'Naam', required: true, hint: 'Titel van het recht'}),
                new AnyAppControl('description', '', 'input', null, { placeholder: 'Omschrijving', hint: 'Omschrijving van het recht'}),
                new AnyAppControl('actief', '', 'checkbox', null, { placeholder: 'Actief', hint: 'Geeft aan of het recht actief is'})
            ]
        }
    };

    getOverviewSettings(type: string) {
        return this.overviewSettings[type];
    }

    getDetailSettings(type: string, id: number) {
        let tmp = this.detailSettings[type];
        tmp.data = this.overviewSettings[type].data[id-1]; // set data
        return tmp;
    }
}