const btnNav = document.getElementById('header__buttonNav');
const nav = document.getElementById('container-nav');
esDesktop = () => window.innerWidth <= 1024;

if (!esDesktop()) {
    nav.classList.toggle('activo');
}
btnNav.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.toggle('activo');
    subMenu.classList.remove('activo');

});
const btnSub = document.getElementById('nav__link-submenu');
const subMenu = document.getElementById('submenu__items');
const btnRegresar = document.getElementById('nav__buttonRegresar')
btnSub.addEventListener("click", (e) => {
    e.preventDefault();
        subMenu.classList.add('activo');
});
btnRegresar.addEventListener("click", (e) => {
        subMenu.classList.remove('activo');
});