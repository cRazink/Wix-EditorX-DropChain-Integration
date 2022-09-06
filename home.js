// requires there to be an existing element "button1" on the page

import { send_algo } from 'backend/dropchain_functions';
export function button1_click(event) {
	send_algo().then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
}
