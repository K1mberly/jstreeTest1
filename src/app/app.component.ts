import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'jstreePrueba';

    ngOnInit() {

        console.log('init')
        $('#html1').jstree({
            'core': {
                'data': {
                    "url": 'http://157.230.203.240:8085/role',
                    "data": (node) => {
                        console.log('node', node)
                        return { "id": node.id };
                    },

                },
                "check_callback": true,
                "themes": { "stripes": true },
            },

            'plugins': ["sort", 'state', 'dnd', "search", "types"],
            "types": {
                "#": {
                    "max_children": 1,
                    "valid_children": ["root"]
                },
                "default": {
                    "icon": "fas fa-sitemap",
                },
                "system": {
                    "icon": "fas fa-lock",
                },
                "customer": {
                    "icon": "fas fa-sitemap",
                },
                "system-root": {
                    "icon": "fas fa-database",
                    "valid_children": ["default", "system", "customer"]
                }
            },
        });
    }
}
