function movable_panel_show() {
    let movable_panel = document.getElementById('movable_panel');
    let arrow_icon_now = document.getElementById('arrow_bottom');
    let arrow_icon_next = document.getElementById('arrow_top');
    let opacity_access_panel = document.getElementById('access_panel');
    movable_panel.classList.remove('d-none');
    arrow_icon_now.classList.add('d-none');
    arrow_icon_next.classList.remove('d-none');
    opacity_access_panel.classList.add('opacity1');
}

function movable_panel_hide() {
    let movable_panel = document.getElementById('movable_panel');
    let arrow_icon_now = document.getElementById('arrow_top');
    let arrow_icon_next = document.getElementById('arrow_bottom');
    let opacity_access_panel = document.getElementById('access_panel');
    movable_panel.classList.add('d-none');
    arrow_icon_now.classList.add('d-none');
    arrow_icon_next.classList.remove('d-none');
    opacity_access_panel.classList.remove('opacity1');
}

function which_partL() {
    let Lpart = document.getElementById('login');
    let Spart = document.getElementById('singup');
    let CSpart = document.getElementById('customer_service');
    let show_icon = document.getElementById('CS_icon_part');
    let opacity_box = document.getElementById('LS_box');
    let close = document.getElementById('close_part');
    let CS_icon = document.getElementById('CS_icon_part');
    CSpart.classList.add('d-none');
    Lpart.classList.remove('d-none');
    Spart.classList.add('d-none');
    show_icon.classList.remove('d-none');
    opacity_box.classList.remove('color');
    close.classList.add('d-none');
    CS_icon.classList.remove('d-none')
}

function which_partS() {
    let Lpart = document.getElementById('login');
    let Spart = document.getElementById('singup');
    let CSpart = document.getElementById('customer_service');
    let show_icon = document.getElementById('CS_icon_part');
    CSpart.classList.add('d-none');
    Spart.classList.remove('d-none');
    Lpart.classList.add('d-none');
    show_icon.classList.remove('d-none');
}

function which_partCS() {
    let Lpart = document.getElementById('login');
    let Spart = document.getElementById('singup');
    let CSpart = document.getElementById('customer_service');
    let show_icon = document.getElementById('CS_icon_part');
    let CS_box = document.getElementById('CS_box');
    Spart.classList.add('d-none');
    CSpart.classList.remove('d-none');
    Lpart.classList.add('d-none');
    show_icon.classList.add('d-none');
    CS_box.classList.remove('opacity03');
}

function which_tabS() {
    let Lpart = document.getElementById('login');
    let Spart = document.getElementById('singup');
    let show_icon = document.getElementById('CS_icon_part');
    let CSpart = document.getElementById('customer_service');
    Spart.classList.remove('d-none');
    Lpart.classList.add('d-none');
    show_icon.classList.remove('d-none');
    CSpart.classList.add('d-none');
}

function LS_part_show() {
    let Lpart = document.getElementById('login');
    let show_icon = document.getElementById('CS_icon_part');
    let LS_box = document.getElementById('LS_box');
    let CS_box = document.getElementById('CS_box');
    let LSpart_position = document.getElementById('LSpart');
    let close = document.getElementById('close_part');
    let CS_icon = document.getElementById('CS_icon_part');
    let submit=document.getElementById('submit');
    Lpart.classList.remove('d-none');
    LS_box.classList.add('color');
    CS_box.classList.add('opacity03');
    CS_icon.classList.remove('d-none');
    submit.classList.add('color_submit_button');
}

function close() {
    let Lpart=document.getElementById('login');
    let CS_box=document.getElementById('CS_box');
    Lpart.classList.add('d-none');
    CS_box.classList.remove('opacity03');
    CS_box.classList.add('opacity01');
}
