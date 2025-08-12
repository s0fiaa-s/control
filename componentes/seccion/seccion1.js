import { item } from "../../modulos/item/itemModulo.js";

export function seccion1() {

    let seccion1 = document.createElement ('seccion1');
    seccion1.className = "seccion-1";

    let pompom = [
        ["Dulce", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_OMk5bFpurJRgZS8usp_jND0DoWgN-zNwlPQ0_r5LIiGNaCKbQKlghfxRtxm5Lavu6A&usqp=CAU"],
        ["Paula",  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISXkyIecGsEhUAkLzLVeeVgR41ZSweTrLAq5iBqC0_DffSeD9drHnPbtNokf-C2fjat8&usqp=CAU"],
        ["Camila", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagzwiqSrH7NN_7MFmrDpCpvP1w9i4zI0QhuhBYRIaC-QLUC4ElXoeL0J4azN4GaQvdpk&usqp=CAU"],
        ["Jorge", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJh1vSbpH4Jy8ltlloq2mVMGjPOk0pVILgPAPHastopdDCX2Iwl4JSqMt9WCsVsMChDrE&usqp=CAU"]

    ];

    pompom.forEach(element => {
        seccion1.appendChild(item(element[0],element[1]));
    });

    return seccion1;
    
}